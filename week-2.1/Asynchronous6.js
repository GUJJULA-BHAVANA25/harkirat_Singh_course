const fs = require("fs");

function cb(data, err){
    console.log("Done!");
}

fs.readFile("a.txt","utf-8", print);

async function readFile() {
    const data = await fs.readFile("aaa.txt", "utf-8");
    console.log("Done!");
}