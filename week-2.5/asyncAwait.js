//it provides a way to write asynchronous code that looks and behaves  like synchronous code.
//it is syntactic sugar on top of promises.

function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve, duration);
    });
}

async function solve() {
    //it feels like it is a synchronous function .but it is a asynchrounous function
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
}

solve();

console.log("after solve function");