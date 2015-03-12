angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/products', {
				templateUrl: 'app/pages/products/products.html',
				controller: 'TilesController',
				controllerAs: 'tiles'
			})
			.when('/products/:productId', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'TilesController',
				controllerAs: 'tiles'
			})
			.when('/support', {
				templateUrl: 'app/pages/support/support.html',
			})
			.when('/articles', {
				templateUrl: 'app/pages/articles/articles.html',
				controller: 'TilesController',
				controllerAs: 'tiles'
			})
			.when('/about', {
				templateUrl: 'app/pages/about/about.html',
				controller: 'TilesController',
				controllerAs: 'tiles'
			})
			.when('/about/:profileId', {
				templateUrl: 'app/pages/about/profile.html',
				controller: 'TilesController',
				controllerAs: 'tiles'
			})
			.when('/contact', {
				templateUrl: 'app/pages/contact/contact.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);