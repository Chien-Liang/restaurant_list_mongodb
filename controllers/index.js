const restaurantsList = require('../restaurant.json').results

const getIndex = (req, res) => {
	res.render('index', { restaurants: restaurantsList })
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

exports.getIndex = getIndex
exports.getSearch = getSearch
exports.getShowpage = getShowpage
