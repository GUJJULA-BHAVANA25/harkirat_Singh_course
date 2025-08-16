const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "bhavana143";

function userMiddleware(req, res, next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,  )

}

module.exports ={
    userMiddleware
}