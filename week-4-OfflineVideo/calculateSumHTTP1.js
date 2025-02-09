//doctor1 

const express = require("express");

function calculateSum(n){
    let ans = 0;
    for(let i = 0; i<= n; i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();            //whenever you are using express library create an instance of app

app.get("/", function(req, res){      //request and response
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("hi your ans is "+ ans);                //whenever you are sending an output make sure it is a string otherwise you will face some issues
})

app.listen(3000);


//to run this code 
//step-1:open terminal and run " node calculateSumHTTP1.js"
//step-2:open a browser and search "http://localhost:3000/?n=10"