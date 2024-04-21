const express=require('express')
const app=express()
const {PORT} = require('./config/serverconfig')
const {apirouter}=require('./routes/index')
const parser= require('body-parser')

app.use(parser.json())
app.use('/api',apirouter)

app.listen(PORT,(req,res)=>{
    console.log(`server started at the post ${PORT}`)
})