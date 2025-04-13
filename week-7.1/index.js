const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "131312";

mongoose.connect("mongodb+srv://gujjula_bhavana:Bhavan%40143@cluster0.h0zkntc.mongodb.net/todo-bhavana")                //if we include (mongodb+srv://gujjula_bhavana:Bhavan@143@cluster0.h0zkntc.mongodb.net/todo-bhavana) as a connection string .then MongoDB interprets @ as the end of the password and start of the hostname. so we need URL-encode the @ symbol in your password as %40
const app = express();
app.use(express.json());       //to parse body for inputs like req.body.email

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({               //this is a asynchronous function(insert).and UserModel returns a promise.So, it is a good idea to await this promise
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "you are signed up"
    })
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo",auth, function(req, res){           //this will post todos only if the user signin
    const userId = req.userId;
    const title = req.body.title;
    TodoModel.create({
        title,
        userId
    })
    res.json({
        userId: userId
    })
});

app.get("/todos",auth,async function(req, res){            //this will get todos only if the user sign in
    //req.userId
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        userId: userId
    })
});

function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

app.listen(3000);