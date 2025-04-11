const jwt = require("jsonwebtoken");


//decode, verify, generate

const value = {
    name: "harkirat",
    accountNumber: 123123123
}

//jwt
//the funciton for generating tokens is sign not generate
const token = jwt.sign(value, "secret");
console.log(token);

//this token has been generated using this secret, and hence this token can only be verified using this secret
//this is you checkbook

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTc0NDM3MjM1OX0.-mAJFHkkGtSk4W0Yli8UcSHTnVnNoDcX99lTazomJYw


//now if we go to jwt.io and paste the above token in there. we will be getting contents .
//continuation decode.js