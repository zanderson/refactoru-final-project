angular.module('FarmApp')
	.controller('SearchController', ['$scope', '$routeParams', '$http', 'cartService', function($scope, $routeParams, $http, cartService){
		// console.log(cartService)
		var keyword = $routeParams.keyword;
		if (keyword){
			keyword = keyword.toLowerCase();
		}
		var category = $routeParams.category;
		if (category){
			category = category.toLowerCase();
		}
		var producer = $routeParams.producer;
		if (producer){
			producer = producer.toLowerCase();
		}
	// Simple GET request example:
		$http({
  		method: 'GET',
  		url: '/api/products'
	}).then(function successCallback(response) {
		$scope.products = response.data

    // this callback will be called asynchronously
    // when the response is available
 	}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

	$scope.addToCart = function(product){
		cartService.addProduct(product);
		$scope.$parent.refresh();
	};

	$scope.filterProducts = function(product) {
		if (!keyword && !category && !producer){
			return true;
		}
		if (keyword){
      		return product.productName.toLowerCase().indexOf(keyword) >= 0;
      	}
      	if (category){
      		return product.produce.toLowerCase().indexOf(category) >= 0;
      	}
      	if (producer){
      		return product.from.toLowerCase().indexOf(producer) >= 0;
      	}
  	}
}]);
