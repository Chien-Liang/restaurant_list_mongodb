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

for (let restaurant of restaurantList) {
  const {
    id,
    name,
    name_en,
    category,
    phone,
    image,
    google_map,
    rating,
    description,
    location,
  } = restaurant
  Restaurant.create({
    id,
    name,
    name_en,
    category,
    phone,
    image,
    google_map,
    rating,
    description,
    location,
  })
}
