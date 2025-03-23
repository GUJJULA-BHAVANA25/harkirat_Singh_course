const express = require("express");

const app = express();

let requestCount = 0;

//we will learn - better routing, adding database , middlewares
app.get("/sum", function(req, res){
    requestCount = requestCount + 1;
    console.log(`Total number of requests = ${requestCount}`);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans:a+b
    })
});
app.get("/multiply", function(req, res){
    requestCount = requestCount + 1;
    console.log(`Total number of requests = ${requestCount}`);
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans:a*b
    })
})

app.listen(3000);