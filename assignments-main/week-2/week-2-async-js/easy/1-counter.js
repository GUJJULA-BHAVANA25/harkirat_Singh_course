/* 
//using setInterval fn
    let ctr = 1;
    function callback(){
        console.log(ctr);
        ctr = ctr + 1;
    }
    setInterval(callback, 1000);
 */

//using setTimeout


let ctr = 1;
function callback(){
    console.clear();
    console.log(ctr);
    ctr = ctr + 1;
    setTimeout(callback, 1000);
}

setTimeout(callback, 1000);