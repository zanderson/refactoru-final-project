angular.module('FarmApp')
      .controller('HeaderController', ['$scope', '$location', 'cartService', function($scope, $location, cartService) {
           $scope.email = '';
   
           $scope.searchText = '';
           $scope.search = function(){
               if ($scope.searchText != ''){
                   var searchKeyword = $scope.searchText;
                   $scope.searchText = '';
                   $location.url('/search?keyword=' + searchKeyword);
                  } 
               }
          $scope.refresh = function() {
            $scope.value = cartService.products.length;
          }

      }])