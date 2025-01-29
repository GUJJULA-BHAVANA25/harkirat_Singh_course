function setTimeoutPromisified(){
    return new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
}

//setTimeout => promisified setTimeout 
function callback(){
    console.log("1 second has passed");
}

setTimeoutPromisified(1000).then(callback);