//thenable is a function that has then
const thenable = {
    then: function(onFulfilled){
        setTimeout(() => onFulfilled(42), 1000);
    }
};

async function main() {
    await thenable;
    console.log("hi there");
}
/*
// const p = new Promise(function(){})
// console.log(p);

// console.log(thenable)
// async function  main() {
//     const v = await thenable.then(function(){
//         console.log("hi there");
//     }); 
// }

*/

main();


//every promise is a thenable
//every thenable is not a promise