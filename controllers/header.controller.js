angular.module('FarmApp')
      .controller('HeaderController', ['$scope', '$location', 'cartService', function($scope, $location, cartService) {
           
           this.searchText = '';
           this.search = function(){
               if (this.searchText != ''){
                   var searchKeyword = this.searchText;
                   this.searchText = '';
                   $location.url('/search?keyword=' + searchKeyword);
                  } 
               }
          this.refresh = function() {
            this.value = cartService.products.length;
          }

      }])