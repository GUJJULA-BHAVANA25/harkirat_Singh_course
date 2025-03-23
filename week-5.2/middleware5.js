//if middleware wants to end the request

const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
    if(req.body.cookie === "google"){                   //when we search for google.com
       next();
    }
    else{
        console.log(`Total number of requests = ${requestCount}`);
        res.json({
            message: "I ended the request early"
        })
    }
}

function realSumHandler(req, res){
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans:a+b,
    });
}
//we will learn - better routing, adding database , middlewares
app.get("/sum",requestIncreaser, realSumHandler);


app.listen(3000);