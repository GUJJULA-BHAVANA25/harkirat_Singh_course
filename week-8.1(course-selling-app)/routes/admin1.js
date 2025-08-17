const { Router } = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
//bcrypt, zod, jsonwebtoken            //these libraries are used for signing in and up
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { AdminMiddleware } = require("../middleware/admin_middleware");

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
            id: admin._id
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

adminRouter.post("/createCourse", AdminMiddleware, async function(req, res){
    const adminId = req.userId;

    const { title, description, imageUrl , price} = req.body;

    const course = await courseModel.create ({
        title, description, imageUrl, price, creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/changeCourse", AdminMiddleware, async function(req, res){
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.findOneAndUpdate({
        _id: courseId,
        creatorId: adminId
    },{
        title: title,
        description: description,
        imageURL: imageUrl,
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", AdminMiddleware, async function(req, res){
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId
    });

    res.json({
        message: "Courses fetched",
        courses
    })
})

module.exports = {
    adminRouter 
}