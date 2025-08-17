const { Router } = require("express");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase",async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    //should check that the user has actually paid the price
    await purchaseModel.create ({
        userId,
        courseId
    })
     //you would expect the user to pay you money
    res.json({
        message: "you have successfully bought the course"
    })
})

courseRouter.get("/preview",async function(req, res){     //this end point doesn't need to authenticated.so no middleware over here. even though you haven't signed up. you will be able to see the available courses
    const courses = await courseModel.find({});
    res.json({
        courses
    })
})


module.exports = {
    courseRouter
}