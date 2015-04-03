angular.module('productsMod')
	.controller('ProductDetailController', ['$scope', '$routeParams', 'Products', function($scope, $routeParams, Products) {
		$scope.products = Products.get({productId: $routeParams.productId});
	}]);