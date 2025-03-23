const express = require("express");

const app = express();

// in express, if you want to send JSON data,
//you need to first parse the json data

app.use(express.json());

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b,
    });
});

app.listen(3000);

//this is post request sent to postman
/*
steps:
-->go to postman paste the url there and select POST request
-->go to body and select raw type over there 
-->put this in the body now:
{
    "a": 1, "b":2
}
*/