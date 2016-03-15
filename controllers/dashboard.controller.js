angular.module('FarmApp')
	.controller('DashboardController', ['$scope', '$http', function DashboardController ($scope, $http){
	
	$http.get('/api/me')
    .then(function(returnData){
    	console.log(returnData)
        if(returnData.data.user){
          $scope.user = returnData.data.user
        }
        else {
            // No user :(
        }
    })

}]);