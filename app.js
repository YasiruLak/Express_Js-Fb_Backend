const express = require('express')
const mongoose = require('mongoose')


const item = require('./routes/user')

const app = express()
const port = 4000

const url = 'mongodb://localhost/express'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
  console.log('MongoDB connected!');
})

app.use(express.json())

app.use('/user', user)


// app.get('/', (req, res) => {
//     console.log('get request comming!');
//     res.send('get req came for / route')
// })

app.listen(port, () => {
  console.log(`app starting on ${port}`);
})