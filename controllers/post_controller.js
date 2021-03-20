const Restaurant = require('../models/restaurants')
const keysTransfer = require('../models/keysTransfer')

exports.deleteRestaurant = (req, res) => {
  const id = req.params.id
  Restaurant.findByIdAndRemove(id, { useFindAndModify: false })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}

exports.editRestaurant = (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .then(restaurant => {
      Object.assign(restaurant, req.body)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(err => console.log(err))
}

exports.createRestaurant = (req, res) => {
  const rawData = req.body
  Restaurant.estimatedDocumentCount()
    .lean()
    .then(number => {
      const id = number + 1
      Object.assign(rawData, { id, rating: +rawData.rating })
      keysTransfer(rawData)
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}
