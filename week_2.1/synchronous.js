//synchronous js

const fsa = require("fs");           //we can use let as well

const contents  = fsa.readFile("a.txt","utf-8");   //bytes, hex
                        //this reads the file asynchronously
console.log(contents);
const contents1 = fsa.readFileSync("b.txt","utf-8");
console.log(contents1);