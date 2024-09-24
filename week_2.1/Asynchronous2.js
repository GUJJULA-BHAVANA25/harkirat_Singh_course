//run this code in loupe website to know how asynchronous functions work( http://latentflip.com/loupe/ )
console.log("Hi");              //first this gets logged

function timeout(){                     //it will read the function 
    console.log("Click the button");         //at last after the time this gets logged
}

setTimeout(timeout, 5000);          //it comes over here and set a timer for 5ms.in the mean time it will go to next one

console.log("Welcome to loupe");        //secnd this gets logged

//thread will not be stucking at one point to complete that fully.it will utilize the meantime.

