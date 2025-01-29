function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve, duration);
    });
}


// setTimeoutPromisified(1000).then(function (){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hi there");
//         });
//     });
// });

//to make code look cleaner now we will write the code in promise chaining
//in js we can chain function calls
setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    return setTimeoutPromisified(3000);
}).then(function(){
    console.log("hello");
    return setTimeoutPromisified(5000);
}).then(function(){
    console.log("hi there");
});

console.log("outside the callback hell");