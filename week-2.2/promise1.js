//returns an object of the promise class
//ms-milliseconds
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback(){
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);

let p = setTimeoutPromisified(5000);
console.log(p);