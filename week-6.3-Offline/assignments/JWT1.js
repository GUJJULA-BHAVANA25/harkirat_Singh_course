const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username
    }, jwtPassword)
    return signature;
}

function verifyJwt(token){
    let ans = false;
    try{
        jwt.verify(token, jwtPassword);
    }
    catch(e){
        ans = false;
    }
    return ans;
}

function decodeJwt(token){
    //true , falsr
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}

const ans = signJwt("harkirat", "bhavana")
console.log(ans);

console.log(decodeJwt("adsfjdskfjj"))
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTc0NDM3MjM1OX0.-mAJFHkkGtSk4W0Yli8UcSHTnVnNoDcX99lTazomJYw"))

console.log(verifyJwt("fjlksdjflkj"));

//install few things:
//npm install
//npm init -y
//npm install jsonwebtoken
//npm install zod


//you run by using the command:node JWT1.js
//to run the tests:npx jest ./tests