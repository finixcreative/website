angular.module('websiteControllers')
	.controller('productsController', ['$scope', 'Products', function($scope, Products) {
		$scope.products = Products.query();
	}]);