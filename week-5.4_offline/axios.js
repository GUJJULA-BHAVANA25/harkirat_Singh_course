const { response } = require("express");

// function main(){
//     fetch("https://sum-server.100devs.com/todos")
//         .then(async response => {
//             const json = await response.json();                   //without await in this line ,if you console.log() it .then it will give you a promise
//             console.log(json);
//             //await response.text()
//         })
// }


async function main(){
    const response = await fetch("https://sum-server.100devs.com/todos")
    const json = await response.json();                  
    console.log(json);    
} 

main();