const { Router } = require("express");
const adminRouter = Router();
const adminSchema = require("../db");

adminRouter.post("/signup", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res){
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/createCourse" , function(req, res){
    res.json({
        message: "add a course"
    })
})

adminRouter.post("/changeCourse" , function(req, res){
    res.json({
        message: "add a course"
    })
})

adminRouter.post("/course/bulk" , function(req, res){
    res.json({
        message: "add a course"
    })
})

module.exports ={
    adminRouter : adminRouter
}