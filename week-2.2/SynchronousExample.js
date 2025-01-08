function promiseFn(resolve){
    let c = 0;
    for(let i = 0; i < 100000000; i++){
        c++;
    }
    resolve("hi there bhavana");                     //try to comment out this line.
}
const p = new Promise(promiseFn);

function callback(str ){
    console.log("hi there");
}
p.then(callback);