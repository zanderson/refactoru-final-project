angular.module('FarmApp').factory('cartService', function() {
  function CartService(){
  	this.products = [];
  	this.total = 0;


	this.addProduct = function(product){
		var p = this.products.find(function(p){return p.id === product.id;});
	 	if(p){
	 		p.qty++;
	 	}
	 	else {
	 		product.qty = 1;
	 		this.products.push(product);
	 	};

	 	this.total += product.price;
	 }

	this.removeProduct = function(product){
		var p = this.products.find(function(p){return p.id === product.id;});
		if(p.qty > 1){
			p.qty--;
		}
		else {
			this.products.pop(product);
		}
	 	this.total -= product.price
	 };
  }

  return new CartService();
});
