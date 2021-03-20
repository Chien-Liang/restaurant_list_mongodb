const express = require('express')
const index = require('../controllers/index_controller')
const post = require('../controllers/post_controller')

const router = express.Router()
router.get('/', index.getAllRestaurants)
router.get('/search', index.searchRestaurants)
router.get('/restaurants/:id', index.showRestaurant)
router.post('/restaurants/:id/delete', post.deleteRestaurant)
router.post('/restaurants/:id/edit', post.editRestaurant)
router.post('/create', post.createRestaurant)

module.exports = router
