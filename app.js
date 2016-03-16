
angular.module('FarmApp')
	.config(function($routeProvider){
	
	$routeProvider
			.when('/', {
				templateUrl : '/views/home.html', // route on SERVER where the template file lives
				controller  : 'HomeController'  // name of angular CONTROLLER to use with the template
			})

			.when('/login', {
				templateUrl : '/views/login.html', // route on SERVER where the template file lives
				controller  : 'mainController'  // name of angular CONTROLLER to use with the template
			})

			.when('/create-an-account', {
				templateUrl : '/views/create-an-account.html', // route on SERVER where the template file lives
				controller  : 'mainController'  // name of angular CONTROLLER to use with the template
			})

			.when('/search', {
				templateUrl : '/views/search.html', // route on SERVER where the template file lives
				controller  : 'SearchController'  // name of angular CONTROLLER to use with the template
			})

			.when('/checkout', {
				templateUrl : '/views/checkout.html', // route on SERVER where the template file lives
				controller  : 'CheckoutController'  // name of angular CONTROLLER to use with the template
			})

			.when('/cart', {
				templateUrl : '/views/cart.html', // route on SERVER where the template file lives
				controller  : 'CartController'  // name of angular CONTROLLER to use with the template
			})

			.when('/item', {
				templateUrl : '/views/item.html', // route on SERVER where the template file lives
				controller  : 'ItemController'  // name of angular CONTROLLER to use with the template
			})

			.when('/item/:id', {
				templateUrl : '/views/item.html', // route on SERVER where the template file lives
				controller  : 'ItemController'  // name of angular CONTROLLER to use with the template
			})

			.when('/item/:id:from', {
				templateUrl : '/views/search.html', // route on SERVER where the template file lives
				controller  : 'ItemController'  // name of angular CONTROLLER to use with the template
			})

			.when('/dashboard', {
				templateUrl : '/views/dashboard.html', // route on SERVER where the template file lives
				controller  : 'DashboardController'  // name of angular CONTROLLER to use with the template
			})

			// .when('/logout', {
			// 	templateUrl : '/views/home.html', // route on SERVER where the template file lives
			// 	controller  : 'LogoutController'  // name of angular CONTROLLER to use with the template
			// })

			.when('/orderconfirmation', {
				templateUrl : '/views/order-confirmation.html', // route on SERVER where the template file lives
				controller  : 'HomeController'  // name of angular CONTROLLER to use with the template
			});

});