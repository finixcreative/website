angular.module('websiteControllers', ['ngAnimate', 'ngRoute'])
	.controller('productsController', ['$scope', 'Products', function($scope, Products) {
		$scope.products = Products.query();
	}]);