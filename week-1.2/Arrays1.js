function solve(arr){
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].gender === "male" && arr[i].age > 18){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

const users = [{
    Name: "harkirat",
    age:21,
    gender:"male"
},{
    Name: "priya",
    age:18,
    gender: "female"
},{
    Name: "raman",
    age: 11,
    gender: "male"
}]

const ans = solve(users);

console.log(ans);