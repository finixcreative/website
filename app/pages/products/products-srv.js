angular.module('websiteServices', ['ngResource'])
	.factory('Products', ['$resource', function ProductsFactory($resource){
		return $resource('app/pages/products/products/', {}, {
			query: {
				method: 'GET',
				isArray: true
			};
		});
	}]);