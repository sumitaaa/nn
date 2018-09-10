const express = require('express')
const mongodb = require('mongodb')

var app = express()

app.get('/',(req,res) =>{
    res.send('hello')
})

app.listen(3000,() =>{
    console.log('is linten on port 3000')
})