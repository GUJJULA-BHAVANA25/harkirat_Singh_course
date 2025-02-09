const express = require("express");
const app = express();

const users = [{
    name: "bhavana",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

//filter in js
//input is given as a query parameter
app.get("/", function(req, res){
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys= johnkidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < johnkidneys.length; i++){
        if(johnkidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidnyes = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidnyes
    })
})

app.post("/", function(req, res){
    // console.log(req.body);            //is gives you undefined 
    const isHealthy = req.body.isHealthy;     //you send data in body  
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})


//how to run this in postman
//go to history
//set to post reqest
//type http://localhost:5500/
//set to raw file
//set to json file
//type:
/*
{
    "isHealthy": true
}
*/
//click on send
//now we will get an output as msg : done

app.put("/" , function(req, res){
    if(!isThereAtleastOneUnhealthyKidney()){                 //assignment.txt solution
        res.status(411).json({
            msg: "you have all good kidneys"
        })   
    }
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});                      //if this wasn't there.request will hang
})

//removing all the unhealthy kidneys
app.delete("/", function(req, res){
    //if input is incorrect
    //you should return a 411
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        //filter
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(!users[0].kidneys[i].healthy){
                atleastOneUnhealthyKidney = true;
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})
    }
    else{
        res.status(411).json({
            msg :"You have no bad kidneys"
        })
    }
   
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}
//now go to browser and type http://localhost:5500/
//we will see it is updated 
//as many times we send request
//it will get updated that many times in browser

app.listen(5500);