//const express = require('express');
//const Router = express.Router;

//the above two lines are same as the below line

const {Router} = require("express");

const UserRouter = Router();      //It is a function.even though it starts with a capital letter


    UserRouter.post("/user/signup", function(req, res){
        res.json({
            message: "signup endpoint"
        })
    })

    UserRouter.post("/user/signin", function(req, res){
        res.json({
            message: "signin endpoint"
        })
    })

    UserRouter.get("/user/purchases", function(req, res){
        res.json({
            message: "all purchases"
        })
    })


module.exports = {
    createUserRoutes: createUserRoutes
}
