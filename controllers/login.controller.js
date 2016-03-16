angular.module('FarmApp')
	.controller('LoginController', ['$scope', '$http', 'cartService', function LoginController ($scope, $http, cartService){
	$scope.$parent.email = '';
	$http.get('/api/me')
    .then(function(returnData){
        if(returnData.data.user){
            // The user exists!
        $scope.$parent.email = returnData.data.user.email
        }
        else {
            // No user :(
        }

    })
}]);
