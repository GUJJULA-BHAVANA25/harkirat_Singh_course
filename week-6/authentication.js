const express = require('express');

const app = express();
app.use(express.json());

const users = [];
//[
//         {username: "harkirat", password: "ilovekirat"}
//
//]
 
//it should return a random long string
function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for(let i = 0; i < 32; i++){
        //use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup", function(req, res){
    //you can add input validation over here. we can come to it again then we will use zod
    const username  = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)) {
        res.json({
            message: "You are already signedup"
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
        message: "You are signed in"
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
        const token = generateToken();
        foundUser.token = token;
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

    let foundUser = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].token == token){
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

app.listen(3000);  //that the http server is listening on port 3000 




/*
how?
-->go to postman
-->http://localhost:3000/signup
-->POST
-->in body paste the below one
{
    "username" : "bhavana1",
    "password" : "12345678"
}
-->click SEND


-->http://localhost:3000/signin
-->copy the token you got as output
-->click send


-->http://localhost:3000/me
-->GET
-->in headers create new one named token and paste the token there 
-->now click on send 

*/




// if we use this kind of token over here then we are going to hit the database so many times . this is the probelem wiht tokens.Colution is JWt(JSON Web Token).that means it is not randomly generated anymore.it is created with username and password somehow.that means token is encrypted with usernam and password.then the username and password can be retrieved in the server itself no need to go to database and check.that means it is stateless

//this is not encrypted .this is sort of encoded

//JWT stores your data not token

//it doesnot hit the database with JWT to authenticate the decypted username and passwrod

