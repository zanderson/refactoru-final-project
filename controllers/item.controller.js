angular.module('FarmApp')
	.controller('ItemController', ['$scope', 'cartService', '$routeParams', '$http', function ItemController ($scope, cartService, $routeParams, $http){
		var productId = $routeParams.id;
    // console.log('hello', $routeParams.id)
		$http({
  		method: 'GET',
  		url: '/api/products/' + productId
	}).then(function successCallback(response) {

		$scope.product = response.data;

    // this callback will be called asynchronously
    // when the response is available
 	}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  
  $scope.addToCart = function(product){
  cartService.addProduct(product);
  $scope.$parent.header.refresh();
  };
}]);
