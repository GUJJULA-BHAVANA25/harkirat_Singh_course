function doTimeCall(resolve){
    console.log("hi");
}
function setTimeoutAsync() {
    return new Promise(doTimeCall);
}

const p = setTimeoutAsync();

p.then(function() {
    console.log("hi");
})