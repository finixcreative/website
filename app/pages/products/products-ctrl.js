angular.module('productsMod')
//	.controller('ProductsController', ['$scope', 'Products', function($scope, Products) {
//		$scope.products = Products.query();
//	}]);

	.controller('ProductsController', [ '$http', function($http){
		var store = this;
		store.products = [];
		$http.get('app/pages/products/products/products.json').success(function(data){
			store.products = data;
		});
	}]);