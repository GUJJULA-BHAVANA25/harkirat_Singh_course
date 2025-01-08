//when a promise object is initialised with a function as a first argumentin it .In that function the first argument calls .then function 

function random(resolve){      //resolve is also a function.whenever the resolve function gets called then it goes to .then function 
   // resolve();
    setTimeout(resolve, 3000);
}

const p = new Promise(random);       //supposed to return u something eventually



//using the eventual value returned by the promise
function callback(){
    console.log("promise succeded");
}
p.then(callback); 