function timeout(){
    console.log("click the button");
}

console.log("HI");

setTimeout(timeout , 1000);                   //this is IO intensive task

console.log("say hi to loupe");

let c = 0
for(let i = 0; i < 100000000; i++){                 //this is CPU intensive task
    c = c + 1;
}

console.log("expensive operetion done");


//Loupe:
/*
    
*/