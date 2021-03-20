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

exports.getSearch = (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  Restaurant.find()
    .lean()
    .then(restaurants => {
      return restaurants.filter(
        restaurant =>
          restaurant.name.toLowerCase().includes(keyword) ||
          restaurant.name_en.toLowerCase().includes(keyword) ||
          restaurant.category.includes(keyword)
      )
    })
    .then(results => {
      res.render('index', {
        restaurants: results,
        searchWord: req.query.keyword,
      })
    })
}

const getShowpage = (req, res) => {
  const id = +req.params.id
  const title = true
  res.render('showPage', { restaurant: restaurantsList[id - 1], title })
}

exports.getShowpage = getShowpage
