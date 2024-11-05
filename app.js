const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Ravi'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
  console.log('connected...')
})
app.use(express.json())
const RaviRouter = require('../routes/ravi')
app.use('/Ravi',RaviRouter)

app.listen(9000, function(){
  console.log('server started')
})