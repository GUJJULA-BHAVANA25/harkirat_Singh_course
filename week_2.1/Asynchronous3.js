function timeout(){
    console.log("click the button");
}

console.log("HI");

setTimeout(timeout , 1000);                   //this is IO intensive task

console.log("say hi to loupe");

let c = 0
for(let i = 0; i < 100; i++){                 //this is CPU intensive task
    c = c + 1;
}

console.log("expensive operetion done");


//Loupe:
/*
    call stack:
    -->the thing that is currently executing.
    -->call stack means the current stack of things that have been called.
    -->what the cpu is doing right now .
    -->cpu intensive tasks
    Web APIs:
    -->extra asynchronous calls that browser provides us.
    -->ex:setTimeout
    -->after completing the task over there.it will push the function or code into the queue
    Call Queue:
    -->it acts like a queue
    -->functions waits in the queue
*/

//anything IO intensive is Asynchronous