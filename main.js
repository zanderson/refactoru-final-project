angular.module('FarmApp', ['ngRoute']);

angular.module('FarmApp')
    .service('authService', ['$http', '$location', function($http){
        
        this.authCheck = function(cb){
            $http.get('/api/me')
                .then( function(returnData){
                    cb(returnData.data)

                })
        }
                                 
    }]);

angular.module('FarmApp')
    .controller('mainController', ['$scope', '$http', 'authService', function($scope, $http, authService){
        console.log('AUTH', authService)
        
        authService.authCheck(function(user){
            console.log('USER!', user)
            $scope.user = user
        })

    }]);

angular.module('FarmApp')
    .controller('mainController', ['$scope', '$http', function($scope, $http){

        $scope.signup = function(){
            $http({
                method : 'POST',
                url    : '/create-an-account',
                data   : $scope.signupForm
            }).then(function(returnData){
                console.log(returnData)
                if ( returnData.data.success ) { window.location.href="/#dashboard" }
            })
        }

        $scope.login = function(){
            $http({
                method : 'POST',
                url    : '/login',
                data   : $scope.loginForm
            }).then(function(returnData){
                if ( returnData.data.success ) { window.location.href="/#dashboard" } 
                else { console.log(returnData)}
            })
        }
        
    }]);
    