// configuration of express.js and starting it
// how to run - in root dir
// node src/app.js
// for running continuously
// nodemon src/app.js

// now we use core path module for working with path
const path = require('path')
const express = require('express')
// node.js variables
console.log(__dirname)
console.log(__filename)
// now we can edit path, as we want
console.log(path.join(__dirname, '../public'))
// initialize app
const app = express()
const publiDir = path.join(__dirname, '../public')
// it's way to customize your server
app.use(express.static(publiDir))
// specify main route - what to do?
// req- request
// res - response
// app.com
// app.com/help
// app.com/about
app.get('', (req, res) => {
  res.send('<h1>Hello express!</h1>')
})

app.get('/help', (req, res) => {
  res.send([{
    name: 'Anna',
    age: 27
  },
  {
      name: 'Stefan',
      age: 28
  }])
})

app.get('/about', (req, res) => {
  res.send('<h2>Page about</h2>')
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: '20C',
    location: 'Frankfurt'
  })
})

// start server - specify port
// http://localhost:3000/
app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
