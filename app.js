// Packages
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Middlewares
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// MongoDB Connection
mongoose.connect('mongodb://localhost/restaurant-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', () => console.log('Failed Mongodb connecting'))
db.once('open', () => console.log('MongoDB Connecting...'))

// Router
const router = require('./routes/route')
app.use(router)

// Link to server
app.listen(3000, () => console.log('Listening to http://localhost:3000'))
