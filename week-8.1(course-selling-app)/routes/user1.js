//const express = require('express');
//const Router = express.Router;

//the above two lines are same as the below line

const { Router } = require("express");
const { UserModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user_middleware");

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

UserRouter.get("/purchases", userMiddleware,async function(req, res){
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    });

    /*
    let purchasedCourseIds = [];
    for(let i = 0; i < purchases.length; i++){
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds}
    })

    //the below three works same as these lines
    */

    const coursesData = await courseModel.find({
        _id: { $in: purchases.map(x => x.courseId) }          //but this is an ugly way of doing this. because we still didn't learn about relations in mongo
    })
    
    res.json({
        purchases,
        coursesData
    })
})


module.exports = {
    UserRouter: UserRouter
}
