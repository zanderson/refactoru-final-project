angular.module('FarmApp')
	.controller('LoginController', ['$scope', '$http', 'cartService', function LoginController ($scope, $http, cartService){

$http.get('/api/me')
    .then(function(returnData){
        if(returnData.data.user){
            // The user exists!
        }
        else {
            // No user :(
        }
    })
}]);
