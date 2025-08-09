const express = require('express');
const createCourseRoutes = require("./routes/course");
const createUserRoutes = require("./routes/user");
const app = express();

createCourseRoutes(app);
createUserRoutes(app);

app.listen(3000)