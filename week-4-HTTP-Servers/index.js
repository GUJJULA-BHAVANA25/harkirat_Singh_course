const express = require('express')          //open terminal: npm install express
const app = express()

//route handlers
// /route
//GET method
app.get('/', function (req, res) {
  res.send('Hello World')
//   res.send({            //if you want to send js code              //do not send response more than once otherwise it will give you error
//     name: "bhavana"            
//   })
})

app.post('/', function(req, res){
    res.send('Hello world');
})
app.get('/asd', function(req, res){
    res.send('Hello from the asd endpoint')
})

app.listen(3000)


//how to run
//node index.js