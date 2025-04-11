const jwt = require("jsonwebtoken");

const contents = {
    "name": "harkirat",
    "accountNumber": 123123123,
    "iat": 1744372359
};

const newToken = jwt.sign(contents, "hsdkdkjfkd");
console.log(newToken);

//continuation verify.js
