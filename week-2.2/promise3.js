function waitFor3S(resolve){
    setTimeout(resolve, 3000)
}

function setTimeoutPromisified(){
    return new Promise(waitFor3S);
}

function main(){
    console.log("main is called");
}

setTimeoutPromisified().then(main);         //promisified version

setTimeout(main, 3000);                         //callback version