angular.module('FarmApp')
	.controller('HomeController', ['$scope', '$location', '$anchorScroll', 
  	function ($scope, $location, $anchorScroll) {
  	
  	$scope.scrollTo = function(id) {
    $location.hash(id);
    console.log($location.hash());
    $anchorScroll();
  };
 }]);
