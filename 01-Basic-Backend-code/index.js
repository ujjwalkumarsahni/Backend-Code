// console.log("hello");
require('dotenv').config()
const express = require('express')

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/ujjwal', (req,res) =>{
    res.send("My name is Ujjwal Kumar");
})

app.get('/ujjwal/login', (req,res) =>{
    res.send('<h1>please login here...</h1>')
})
const port = 4000
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
