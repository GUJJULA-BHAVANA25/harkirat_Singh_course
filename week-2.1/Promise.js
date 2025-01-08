const p1 = Promise.resolve('Like if you understoood callbacks');
const p2 = 100;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Subscribe for more updates');
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));  

/*
available promise state and values
-->Pending   (undefined)
-->Fullfilled    (resolved value)
-->rejected       (reason for rejection)
*/

/*
available promise methods
-->Promise.all([promises])
-->Promise.allSettled([promises])
-->Promise.any([promises])
-->Promise.race([promises])
*/