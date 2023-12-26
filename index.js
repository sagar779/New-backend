require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res) =>{
    res.send('Welcome to my Youtube channel')
})
app.get('/twitter',(req, res) =>{
    res.send("Welcome to my Twitter account")
})
app.get('/instagram',(req,res) => {
    res.send("<h1> Yeh fans </h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})