const express = require('express');
const { courseRouter } = require("./routes/course1");
const { UserRouter } = require("./routes/user1");
const { adminRouter } = require("./routes/admin1");
const app = express();

app.use("/api/v1/course1", courseRouter);
app.use("/api/v1/user1", UserRouter);
app.use("/api/v1/admin", adminRouter)

app.listen(3000);