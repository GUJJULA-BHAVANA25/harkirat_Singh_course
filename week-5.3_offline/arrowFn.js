function sum(a, b){
    return a + b;
}

//think of it as a another of writing functions.But it's not.It behaves like a function but not actually
const sum = (a, b) => {
    return a + b;
}

const ans = sum(1, 2);
console.log(ans);