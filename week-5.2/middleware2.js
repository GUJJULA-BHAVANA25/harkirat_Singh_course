const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(){
    requestCount = requestCount + 1;
    console.log(`Total number of requests = ${requestCount}`);
}
//we will learn - better routing, adding database , middlewares
app.get("/sum", function(req, res){
    requestIncreaser();
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans:a+b
    })
});
app.get("/multiply", function(req, res){
    requestIncreaser();
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans:a*b
    })
})

app.listen(3000);