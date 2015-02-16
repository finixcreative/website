/* App Module */

var app = angular.module('website', [
	'ngAnimate',
	'ngRoute',
	'websiteControllers',
	'websiteServices'
]);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'html/home.html',
			controller: 'SlideController',
		})
		.when('/products', {
			templateUrl: 'html/products.html',
			controller: 'StoreController',
		})
		.when('/products/:product', {
			templateUrl: 'html/type.html',
			controller: 'StoreController',
		})
		.when('/blog', {
			templateUrl: 'html/blog.html',
			controller: 'ArticlesController',
		})
		.when('/about', {
			templateUrl: 'html/about.html',
			controller: '',
		})
		.when('/contact', {
			templateUrl: 'html/contact.html',
			controller: '',
		})
		.otherwise({
			redirectTo: '#/home',
		});
}]);