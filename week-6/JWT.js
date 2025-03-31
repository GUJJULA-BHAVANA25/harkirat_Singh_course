const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomeharkiratilovekiara"
const app = express();
app.use(express.json());

const users = [];
//[
//         {username: "harkirat", password: "ilovekirat"}
//
//]
 
//token logic to JWT
//1)to work with JWT you need to add the library
//2)using the command npm install jsonwebtoken


app.post("/signup", function(req, res){
    //you can add input validation over here. we can come to it again then we will use zod
    const username  = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)) {
        res.json({
            message: "You are already signed up"
        })
        return 
    }

    if(username.length < 5){
        res.json({
            message: "Your username is very small"
        })
        return;
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })

    console.log(users)
})

app.post("/signin", function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i]
        }
    }

    // const user = users.find(function(u){
    //     if(u.username === username) {
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // })

    if(foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);                  //instead of generatetoken we need to convert their username to a jwt

        //foundUser.token = token;            //you don't need to store it in a variable any more.because it is stateless. this token itself stores its state .you don't have to store it in a database 
        res.json({
            token: token
        })
    }
    else{
        res.status(403).send({
            message: "Invalid username or password"
        })
    }

    console.log(users)
})

//after logging in .the user need to get the details of his related stuff acoording to the log in details
app.get("/me", function(req, res) {
    //headers are commonly used for authentication
    const token = req.headers.token
    const decodedInformation= jwt.verify(token, JWT_SECRET);             //to get all the info related to your account you need to get back to your username
    const username = decodedInformation.username;
    let foundUser = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].username == username){
            foundUser = users[i]
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.json({
            message: "token invalid"
        })
    }
})

app.listen(3000); 