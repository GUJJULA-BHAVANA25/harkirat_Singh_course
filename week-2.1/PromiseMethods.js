const p1 = Promise.resolve('Like if you understoood callbacks');
const p2 = Promise.reject('Rejected');
const p3 = 100;
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Subscribe for more updates');
});

//Promise.all([p1, p3, p4]).then((values) => console.log(values));   
//Promise.race([p1, p3, p3]).then((value) => console.log(value));       //which value comes first and it is true.that value is going to print.
//Promise.allSettled([ p1, p2, p3, p4 ]).then((values) => console.log(values));
//Promise.any([ p2, p3 ]).then((values) => console.log(values));           //anything that gets fullfilled



fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((result) => console.log(result));
    
//other way to write the above code

//const axios = require('axios');
axios.get('https://api.github.com/users')
    .then((result) => console.log(result.data));



//even for the promises also we willbe having complexity .Though it is less when compared to callbacks.
//the solution for this is async/await 