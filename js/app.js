'use strict';

/* App Module */

var websiteApp = angular.module('websiteApp', [
	'ngRoute',
	'ngAnimate',
	'websiteControllers',
	'websiteServices',
	'websiteDirectives'
]);
websiteApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'html/home.html',
			controller: 'slidesController'
		})
		.when('/products', {
			templateUrl: 'pages/products/products.html',
			controller: 'productsController'
		})
		.when('/products/:productId', {
			templateUrl: 'pages/products/product.html',
			controller: 'productDetailController'
		})
		.when('/support', {
			templateUrl: 'pages/support/support.html',
		})
		.when('/articles', {
			templateUrl: 'pages/articles/articles.html',
			controller: 'articlesController'
		})
		.when('/about', {
			templateUrl: 'pages/about/about.html',
			controller: 'teamController'
		})
		.when('/about/:profile', {
			templateUrl: 'pages/about/profile.html',
			controller: 'teamController'
		})
		.when('/contact', {
			templateUrl: 'pages/contact/contact.html',
		})
		.otherwise({
			redirectTo: '/',
		});
}]);