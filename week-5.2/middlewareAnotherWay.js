//if middleware wants to end the request

const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
        console.log(`Total number of requests = ${requestCount}`);
        res.json({
            message: "I ended the request early"
        });
}

function realSumHandler(req, res){
    console.log("control reached the real handler");
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans:a+b,
    });
}

//another way of using middleware-using it as a global middleware
app.get("/admin", realSumHandler);

app.use(requestIncreaser)

app.get("/sum", realSumHandler);

app.get("/multiply", realSumHandler);

app.get("/divide" , realSumHandler);

app.listen(3000);