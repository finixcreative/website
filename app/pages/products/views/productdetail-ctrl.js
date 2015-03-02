angular.module('websiteControllers', ['ngAnimate', 'ngRoute'])
	.controller('productDetailController', ['$scope', '$routeParams', 'Products', function($scope, $routeParams, Products) {
		$scope.products = Products.get({productId: $routeParams.productId}, function(products) {});
	}]);