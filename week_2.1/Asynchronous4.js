const fs = require("fs")

function cb(err, data){
    console.log(typeof err);
}
fs.readFile("aaa.txt", "utf-8", cb);