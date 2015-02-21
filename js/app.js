/* App Module */

var websiteApp = angular.module('websiteApp', [
	'ngAnimate',
	'ngRoute',
	'websiteControllers',
	'websiteServices'
]);
websiteApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'html/home.html',
			controller: 'slidesController',
		})
		.when('/products', {
			templateUrl: 'products/products.html',
			controller: 'productController',
		})
		.when('/products/:product', {
			templateUrl: 'products/product.html',
			controller: 'productController',
		})
		.when('/support', {
			templateUrl: 'support/support.html',
			controller: '',
		})
		.when('/articles', {
			templateUrl: 'articles/articles.html',
			controller: 'articlesController',
		})
		.when('/about', {
			templateUrl: 'about/about.html',
			controller: 'teamController',
		})
		.when('/about/:profile', {
			templateUrl: 'about/profile.html',
			controller: 'teamController',
		})
		.when('/contact', {
			templateUrl: 'contact/contact.html',
			controller: '',
		})
		.otherwise({
			redirectTo: '/',
		});
}]);