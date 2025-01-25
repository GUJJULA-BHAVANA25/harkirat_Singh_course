const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,contents){
    console.log(contents);
});

fs.readFile("b.txt","utf-8",function(err,contents){
    console.log(contents);
});

fs.readFile("a.txt","utf-8",function(err,contents){
    console.log(contents);
});




//asynchronous:readFile, setTimeout, fetch, database calls
//either functions natively asynchronous or any function that you define on your own that depends on this natively asynchronous function is also asynchrounous 