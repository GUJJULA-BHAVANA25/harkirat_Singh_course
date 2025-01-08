const fs = require("fs");

console.log("------top of the file-------");

function readTheFile(sendTheFinalValueHere){
    //do ur thing , whenever u have the final value, call sendTheFinalValueHere("finalValue");
    fs.readFile("a.txt", "utf-8", function(err, data){
        sendTheFinalValueHere(data);
    })
}

function readFile(filename){
    //read the file and return its value
    return new Promise(readTheFile);
}

const p = readFile();

function callback(contents){
    console.log(contents);
}
p.then(callback);