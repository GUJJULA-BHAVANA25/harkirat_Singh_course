//const express = require('express');
//const Router = express.Router;

//the above two lines are same as the below line

const { Router } = require("express");
const { UserModel } = require("../db");
const jwt = require("jsonwebtoken");


const UserRouter = Router();      //It is a function.even though it starts with a capital letter            //it is the place where we will handle incoming requests.


UserRouter.post("/signup", async (req, res) =>{
    const {email, password, firstName, lastName} = req.body;
    //hash the password , so plaintext password is not stored in the db  
       await UserModel.create({
            email,
            password,               // the above line and this line does the same job
            firstName,
            lastName
        })
    
    res.json({
        message: "signup endpoint"
    })
})

UserRouter.post("/signin",async function(req, res){
    const { email, password } = req.body;

    //TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if(user) {
        const token = jwt.sign({
            id: user.id
        }, JWT_USER_PASSWORD);

        //if you want to do cookie based authentication. not token based authentication,then you need to do your cookie based authentication logic over here
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

UserRouter.get("/purchases", function(req, res){
    res.json({
        message: "all purchases"
    })
})


module.exports = {
    UserRouter
}
