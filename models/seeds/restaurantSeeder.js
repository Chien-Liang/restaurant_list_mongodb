// MongoDB Connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', () => console.log('Failed'))
db.once('open', () => console.log('Succeed'))

// modules, files
const Restaurant = require('../restaurants')
const restaurantList = require('./restaurant.json').results
const keysTransfer = require('../keysTransfer')

for (let restaurant of restaurantList) {
  keysTransfer(restaurant)
}
