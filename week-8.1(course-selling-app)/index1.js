const express = require('express');
const createCourseRoutes = require("./routes/course");
const createUserRoutes = require("./routes/user");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000)