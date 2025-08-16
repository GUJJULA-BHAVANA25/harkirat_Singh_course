const express = require('express');
const mongoose = require('mongoose');

const { courseRouter } = require("./routes/course1");
const { UserRouter } = require("./routes/user1");
const { adminRouter } = require("./routes/admin1");
const app = express();
app.use(express.json());

app.use("/api/v1/course1", courseRouter);
app.use("/api/v1/user1", UserRouter);
app.use("/api/v1/admin", adminRouter)

async function main(){
    await mongoose.connect("mongodb+srv://gujjula_bhavana:Bhavan%40143@cluster0.h0zkntc.mongodb.net/course-selling-app")
    app.listen(3000);
    console.log("listening on port 3000")
}

main();