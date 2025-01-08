const fs = require("fs");

console.log("------top of the file-------");

function readTheFile(resolve){
    //do ur thing , whenever u have the final value, call sendTheFinalValueHere("finalValue");
    console.log("readTheFile called");
    setTimeout(function(){
        console.log("callback based setTimeout completed");
        resolve();
    }, 3000);
}

function setTimeoutPromisified(filename){
    console.log("setTimeoutPromisified called");
    //read the file and return its value
    return new Promise(readTheFile);
}

const p = setTimeoutPromisified();


function callback(){
    console.log("timer is done");
}
p.then(callback);

console.log("-----end of the file-------");