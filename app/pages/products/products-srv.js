angular.module('websiteServices', ['ngResource'])
	.factory('Products', ['$resource', function ProductsFactory($resource){
		return $resource('pages/products/products/', {}, {
			query: {
				method: 'GET',
				isArray: true
			};
		});
	}]);