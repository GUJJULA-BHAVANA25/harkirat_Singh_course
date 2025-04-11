const jwt = require("jsonwebtoken");

const value = {
    name: "harkirat",
    accountNumber: 123123123
}

const token = jwt.verify(value, "secret");
console.log(token);