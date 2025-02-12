const express = require('express')
const app = express()

let todos = [];

app.post('/', function(req, res){
    //create a random id for the todo
    //extract the todo title from the body
    todos.push({
        titile,
        id
    })
})

app.delete('/', function(req, res){
    //extract the todo id
    //remove the todo form here
})

app.get('/' , function(req, res){
    res.json({
        todos
    })
})

app.listen(3000)