const fs = require("fs");

function print(err, data){              //err is error.If the file you want read doesn't exist then err returns error.
    if(err){
        console.log("File not found");
    }
    else{
        console.log(data);
    }
}

fs.readFile("aa.txt", "utf-8",print);     //here aa.txt file doesn't exist .so it throw an error.
fs.readFile("a.txt", "utf-8", print);   //asynchronously

fs.readFile("b.txt", "utf-8", print);    //asynchronously

console.log("Done!");


//in asynchronous : you will not be waiting for the line to execute completely . you will do one thing it will take some time definitely ,  in the mean time you will go to another line to execute.
//but in synchronous ,the code will be executed line by line until the complete code is executed.

//funciton definition
function readFile(filepath, encoding, op){
    //read file
    op("Error!", "hi there")
}