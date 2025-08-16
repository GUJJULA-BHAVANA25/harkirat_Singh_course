const { Router } = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");
//bcrypt, zod, jsonwebtoken            //these libraries are used for signing in and up
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "bhavana143143143143"

adminRouter.post("/signup",async function(req, res){
   const {email, password, firstName, lastName} = req.body;
    //hash the password , so plaintext password is not stored in the db  
       await adminModel.create({
            email,
            password,               // the above line and this line does the same job
            firstName,
            lastName
        })
    
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;

    //TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if(admin) {
        const token = jwt.sign({
            id: admin.id
        }, JWT_ADMIN_PASSWORD);

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
    adminRouter 
}