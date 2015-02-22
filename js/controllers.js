'use strict';

/* Controllers */

var websiteControllers = angular.module('websiteControllers', [
	'ngAnimate',
	'ngRoute'
]);
websiteControllers.controller('tabController', function() {
	this.tab = "/";
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});
websiteControllers.controller('productsController', [
	'$scope',
	'Products',
	function($scope, Products) {
		$scope.products = Products.query();
	}
]);
websiteControllers.controller('productController', [
	'$scope',
	'$routeParams',
	'Products',
	function($scope, $routeParams, Products) {
		$scope.products = Products.get({products: $routeParams.productId}, function(product) {
			$scope.icon = product.icon;
		});
		$scope.setIcon = function(icon) {
			$scope.icon = icon;
		}
	}
]);
websiteControllers.controller('teamController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('json/team.js').success(function(data) {
		$scope.products = data;
	});
}]);
websiteControllers.controller('articlesController', [
	'$scope',
	'Articles',
	function($scope, Articles) {
		$scope.articles = Articles.query();
	}
]);
websiteControllers.controller('slidesController', [
	'$scope',
	'Slides',
	function($scope, Slides) {
		$scope.images = Slides.query();
	}
]);