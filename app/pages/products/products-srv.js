angular.module('Products', ['ngResource'])
	.factory('Products', ['$resource', function ProductsFactory($resource){
		return $resource('app/pages/products/products/:productId.json', {}, {
			query: {
				method: 'GET',
				params: {productId: 'products'},
				isArray: true
			}
		});
	}]);