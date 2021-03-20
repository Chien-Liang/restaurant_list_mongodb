const Restaurant = require('../models/restaurants')

exports.deleteRestaurant = (req, res) => {
  const id = req.params.id
  Restaurant.findByIdAndRemove(id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}
