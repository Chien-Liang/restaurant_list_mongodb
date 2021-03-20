const Restaurant = require('./restaurants')

function keysTransfer(object) {
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
  } = object
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

module.exports = keysTransfer
