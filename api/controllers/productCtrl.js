var Product = require('../models/product.js')
function getProducts (req, res){
console.log('hello', req.params)

	// Populate allows us to turn that into the full Document

	// console.log('params', req.params)
	var defaultPop = 'products'
	if(req.params.productID){
		Product.findOne({_id : req.params.productID})

			.populate(defaultPop)
			.exec(function(err, doc){
				res.send(doc)
			})
	}
	// Get MANY
	else {
		Product.find({}, function(err, docs){
			// Find will ALWAYS give you back an array, even if it finds one or none
			res.send(docs)
		})
	}
}

module.exports = {
	getProducts : getProducts
}