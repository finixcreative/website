angular.module('websiteApp', ['ngRoute', 'ngAnimate', 'websiteControllers', 'websiteServices', 'websiteDirectives'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
				controller: 'slidesController'
			})
			.when('/products', {
				templateUrl: 'app/pages/products/products.html',
				controller: 'productsController'
			})
			.when('/products/:productId', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'productDetailController'
			})
			.when('/support', {
				templateUrl: 'app/pages/support/support.html',
			})
			.when('/articles', {
				templateUrl: 'app/pages/articles/articles.html',
				controller: 'articlesController'
			})
			.when('/about', {
				templateUrl: 'app/pages/about/about.html',
				controller: 'teamController'
			})
			.when('/about/:profile', {
				templateUrl: 'app/pages/about/profile.html',
				controller: 'teamController'
			})
			.when('/contact', {
				templateUrl: 'app/pages/contact/contact.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);