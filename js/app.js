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
			templateUrl: 'html/products.html',
			controller: 'productController',
		})
		.when('/products/:product', {
			templateUrl: 'html/product.html',
			controller: 'productController',
		})
		.when('/support', {
			templateUrl: 'html/support.html',
			controller: '',
		})
		.when('/articles', {
			templateUrl: 'html/articles.html',
			controller: 'articlesController',
		})
		.when('/about', {
			templateUrl: 'html/about.html',
			controller: 'teamController',
		})
		.when('/about/:profile', {
			templateUrl: 'html/profile.html',
			controller: 'teamController',
		})
		.when('/contact', {
			templateUrl: 'html/contact.html',
			controller: '',
		})
		.otherwise({
			redirectTo: '/',
		});
}]);