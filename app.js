const express = require('express')
const app = express()
const knex = require('./knex') 




app.get('/', function (req, res) {
  res.send('Hello World')
})




app.listen(3000, () => {console.log('Server Started on port 3000')})
