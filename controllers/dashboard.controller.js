angular.module('FarmApp')
	.controller('DashboardController', ['$scope', '$http', function DashboardController ($scope, $http){
	console.log($scope)
	$http.get('/api/me')
    .then(function(returnData){
    	console.log(returnData)
        if(returnData.data.user){
          $scope.user = returnData.data.user
          $scope.$parent.header.email = returnData.data.user.email
        }
        else {
            // No user :(
        }
    })

}]);