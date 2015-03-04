angular.module('productsMod', ['ngResource'])
	.factory('Products', ['$resource', function ProductsFactory($resource){
		return $resource('/website/app/pages/products/products/:productId.json', {}, {
			query: {
				method: 'GET',
				params: {productId: 'products'},
				isArray: true
			}
		});
	}]);