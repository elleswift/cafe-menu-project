const express = require('express')
const cors = require('cors')
const coffeeData = require('./coffee-data-menu.json')
// const { json } = require('express')
const fs = require('fs')
const app = express() // giving express the name of app
app.use(cors())
app.use(express.json())

app.listen(5002, () => {
  console.log('Are you there?')
})
const handleWriteFile = () => {
  const jsonCoffeeData = JSON.stringify(coffeeData)
  fs.writeFile('coffee-data-menu.json', jsonCoffeeData, error => console.error(error))
}

 app.get('/', (request, response) => {
  response.send(coffeeData)
})