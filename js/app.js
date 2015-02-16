/* App Module */

var app = angular.module('website', [
	'ngAnimate',
	'ngRoute',
	'websiteControllers'
	'websiteServices'
]);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/products', {
			templateUrl: 'html/chambers.html',
			controller: 'ChambersController',
		})
		.when('/products/:product', {
			templateUrl: 'html/type.html',
			controller: 'ChambersController',
		})
		.when('/blog', {
			templateUrl: 'html/series.html',
			controller: 'ChambersController',
		})
		.when('/about', {
			templateUrl: 'html/temperature.html',
			controller: 'ChambersController',
		})
		.when('/contact', {
			templateUrl: 'html/humidity.html',
			controller: 'ChambersController',
		})
		.otherwise({
			redirectTo: 'index.html',
		});
}]);