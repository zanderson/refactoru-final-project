var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	id: Number,
	produce    : String,
	productType: String,
	productName: String,
	productDescription: String,
	price: Number, 
	tags: Array,
	weight: String,
	from: String,
	image   : String,
	
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;


