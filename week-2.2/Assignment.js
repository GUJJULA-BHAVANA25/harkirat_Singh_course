//logs hi after 1 second
//logs gello 3 seconds after step 1
//logs hello there 5 seconds after step 2
function HI(resolve){
    resolve(setTimeout, 1000);
}
function PrintHI(){
    console.log("HI");
}
HI(PrintHI);

function Hello(resolve){
    setTimeout(resolve, 3000);
}
function PrintHello(){
    console.log("Hello");
}
Hello(PrintHello);

function HelloThere(resolve){
    setTimeout(resolve,5000);
}
function PrintHelloThere(){
    console.log("Hello There");
}
HelloThere(PrintHelloThere);