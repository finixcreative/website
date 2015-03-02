angular.module('Products', ['websiteServices'])
	.controller('ProductsController', ['$scope', 'Products', function($scope, Products) {
		$scope.products = Products.query();
	}]);