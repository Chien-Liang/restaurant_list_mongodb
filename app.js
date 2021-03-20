// Packages
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

// Middlewares
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

// MongoDB Connection
mongoose.connect('mongodb://localhost/restaurant-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', () => console.log('Failed Mongodb connecting'))
db.once('open', () => console.log('MongoDB Connecting...'))

// Routers
const index = require('./controllers/index_controller')
const post = require('./controllers/post_controller')
app.get('/', index.getAllRestaurants)
app.get('/search', index.searchRestaurants)
app.get('/restaurants/:id', index.showRestaurant)

// Link to server
app.listen(3000, () => console.log('Listening to http://localhost:3000'))
