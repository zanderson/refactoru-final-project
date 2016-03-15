angular.module('FarmApp')
	.controller('CartController', ['$scope', 'cartService', function($scope, cartService){
		$scope.products = cartService.products;
		$scope.total = cartService.total;
		$scope.addProduct = function(product) {
			cartService.addProduct(product);
		}
		$scope.removeProduct = function(product) {
			cartService.removeProduct(product);
		}
}]);