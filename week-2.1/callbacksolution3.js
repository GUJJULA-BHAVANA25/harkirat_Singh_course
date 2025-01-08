//third solution for callback hell is promises
//producer code
function step1(value, error){
    return new Promise((resolve, reject) => {
        if(!error){
            resolve(value + 10);
        }
        else {
            reject('Something went wrong');
        }
    });
}
function step2(value, error){
    return new Promise((resolve, reject) => {
        if(!error){
            resolve(value + 10);
        }
        else {
            reject('Something went wrong');
        }
    });
}
function step3(value, error){
    return new Promise((resolve, reject) => {
        if(!error){
            resolve(value + 10);
        }
        else {
            reject('Something went wrong');
        }
    });
}
//consuming code
step1(10, false)
     .then((result1) => step2(result1, false))
     .then((result2) => step2(result2, false))
     .then((result3) => console.log(result3))
     .catch((error) => console.log(error));

/*
Promises:
-->i promise a result
-->producing code is code that can take some time
-->consuming code is code that must wait for the result
-->a promise is a javascript object that links producing code and consuming code
*/