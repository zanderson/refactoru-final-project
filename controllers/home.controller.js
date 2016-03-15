angular.module('FarmApp')
	.controller('HomeController', ['$scope', '$location',
  	function ($scope, $location) {
   //Do things here like check authentication

   //Redirect to the new location regardless of if it has anchor name
   $scope.linkTo = function(id) {
     $location.url(id);
   }
 }]);
