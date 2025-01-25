const fs = require('fs');

function print(err, data){
    console.log(data);
}
var contents = readFileSync("a.txt","UTF-8");        //Synchronously
console.log(contents);

var contents1 = readFile(b.txt);                     //asynchronously
console.log(contents1);

function readFile(filePath, encoding, op) {
    //read file
    op("Error!", "hi there");
}