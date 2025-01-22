/* 
Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?
*/

function Sum(a, b){
    let Total = a + b;
    return Total;
}

let ans1 = Sum(3,5);
let ans2 = Sum(5, 6);
let ans3 = Sum("bhavana" , "Gujjula");

console.log(ans1);
console.log(ans2);
console.log(ans3);