let ctr = 0;
function callback(){
    const el = document.querySelectorAll("h2")[1]
    el.innerHTML = ctr;
    ctr = ctr + 1;
}

setInterval(callback, 1000);

/*
setInterval(callback, 1000);             //this will keep calling this function infinitely
setTimeout(callback, 1000);              //this will only call it once

callback();
callback();
callback();
callback();
callback();
*/