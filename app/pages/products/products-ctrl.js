angular.module('websiteControllers', ['websiteServices'])
	.controller('productsController', ['$scope', 'Products', function($scope, Products) {
		$scope.products = Products.query();
	}]);