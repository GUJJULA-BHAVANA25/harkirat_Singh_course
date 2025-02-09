const fs = require("fs");

//http-ify
fs.readFile("a.txt", function(err, data){
    console.log(data);
})