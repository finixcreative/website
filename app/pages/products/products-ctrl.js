angular.module('productsMod')
	.controller('ProductsController', ['$scope', 'Products', function($scope, Products) {
		$scope.products = Products.query();
	}]);