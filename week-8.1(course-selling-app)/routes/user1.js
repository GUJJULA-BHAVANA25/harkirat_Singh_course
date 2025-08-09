//const express = require('express');
//const Router = express.Router;

//the above two lines are same as the below line

const { Router } = require("express");

const UserRouter = Router();      //It is a function.even though it starts with a capital letter            //it is the place where we will handle incoming requests.


UserRouter.post("/signup", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

UserRouter.post("/signin", function(req, res){
    res.json({
        message: "signin endpoint"
    })
})

UserRouter.get("/purchases", function(req, res){
    res.json({
        message: "all purchases"
    })
})


module.exports = {
    UserRouter: UserRouter
}
