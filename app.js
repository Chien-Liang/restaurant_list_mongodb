// Setups
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

// Routers
const index = require('./controllers/index')
app.get('/', index.getIndex)
app.get('/search', index.getSearch)
app.get('/restaurants/:id', index.getShowpage)

// Link to server
app.listen(3000, () => console.log('Listening to http://localhost:3000'))
