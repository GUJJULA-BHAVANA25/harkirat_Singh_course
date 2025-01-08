const { resolve } = require("path");

function setTimeoutPromisified(time){
    function doSomething(){
        setTimeout(resolve, time);
    }
    return new Promise(doSomething);
}
function callback(){
    console.log("Time has passed");
}

const p = setTimeoutPromisified(5000);
p.then(callback);