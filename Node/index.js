const express = require('express')
var cors = require('cors')

var app = express()
app.use(cors());
const port = 8080

app.get('/1', (req, res) => {
  res.send('Hello!')
})

app.get('/2', (req, res) => {
    res.send('Hello Daniel!')
})

app.get('/3', (req, res) => {
    res.send('Hello Ryan!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})