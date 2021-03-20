// Import Modules
const Restaurant = require('../models/restaurants')

exports.getAllRestaurants = (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(err => console.log(err))
}

const getSearch = (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  const searchResults = restaurantsList.filter(
    restaurant =>
      restaurant.name.toLowerCase().includes(keyword) ||
      restaurant.name_en.toLowerCase().includes(keyword) ||
      restaurant.category.includes(keyword)
  )
  res.render('index', {
    restaurants: searchResults,
    searchWord: req.query.keyword,
  })
}

const getShowpage = (req, res) => {
  const id = +req.params.id
  const title = true
  res.render('showPage', { restaurant: restaurantsList[id - 1], title })
}

exports.getSearch = getSearch
exports.getShowpage = getShowpage
