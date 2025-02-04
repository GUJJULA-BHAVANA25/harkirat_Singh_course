//assignment.js
//using callback hell

function callback(){
    console.log("hi");
}

setTimeout(function (){
    console.log("hi");
    setTimeout(function (){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");                    //callback hell
        }, 5000);                            //
    }, 3000);
}, 1000);


console.log("outside the callback hell");