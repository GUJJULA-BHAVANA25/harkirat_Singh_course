const express = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "iloveyou143";

const app = express();
app.use(express.json());                    //this is a middleware.this middleware let you extract the json body from the request

const users = [];

function logger(req, res, next){
    console.log(req.method + "request came");
    next();
}

//lovalhost:3000
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup",logger, function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    //we should check if a use rwith this username already exists

    if(users.find(u => u.username === username)){
        res.json({
            message: "you are already signed up"
        })
        return
    }

    if(username.length < 6){
        res.json({
            message: "username should be minimum of 6 characters"
        })
        return
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "you are signed up"
    })

    console.log(users);
})

app.post("/signin",logger, function(req, res){
    
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null

    for(let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i]
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username: users[i].username
        }, JWT_SECRET);
        res.header("jwt", token)               //to send the response header 
        res.json({
            token: token                    //anyone can extract the data from the token .the username in token can be extracted by going to jwt.io and paste the token to get username
        })
    }

    else{
        res.status(403).send({
            message: "invalid username and password"
        })
    }

    console.log(users)
})

//middleware is added
function auth(req, res, next){
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET);             //it is verifying the token

    if(decodedInformation.username){
        req.username = decodedInformation.username;
        next()
    }
    else{
        res.json({
            message:"you are not logged in"
        })
    }
}

app.get("/me", logger, auth, function(req, res){

    let foundUser = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].username == req.username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
})


app.listen(3000);