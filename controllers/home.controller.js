angular.module('FarmApp')
	.controller('HomeController', ['$scope', '$location', '$anchorScroll', '$http', 
  	function ($scope, $location, $anchorScroll, $http) {
  	
  	$scope.scrollTo = function(id) {
    $location.hash(id);
    console.log($location.hash());
    $anchorScroll();
  };

  $http.get('/api/me')
    .then(function(returnData){
    	console.log(returnData)
        if(returnData.data.user){
            // The user exists!
        $scope.$parent.email = returnData.data.user.email
        }
        else {
            // No user :(
        }

    })
 }]);
