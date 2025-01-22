function greet(user){
    console.log("Hi " + gender + user.Name + " your age is " + user.age);
}

let user = {
    Name: "raman",
    age: 60,
    gender: "mr"
}
greet(user);