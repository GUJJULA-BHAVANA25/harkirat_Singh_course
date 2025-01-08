//aync and await make promises easier to write
//async makes a function return a Promise
//await makes a function wait for a promise

function step1(value, error) {
    return new Promise((resolve, reject) => {
        if(!error){
            resolve(value + 10);
        }
        else{
            reject('Something wrong');
        }
    });
}
async function result(){
    let result1 = step1(10, false);        //if you want it as a promise.you should not use await
    return result1;
}
async function result2() {
    let result = await Promise.resolve(5);                //if you want the rsult as it is .you are supposed to use await.
    return result;
}
console.log(result());
//result().then((result) => console.log(result));