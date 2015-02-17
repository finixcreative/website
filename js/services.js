/* Services */

var websiteServices = angular.module('websiteServices', [
	'ngResource'
]);
websiteServices.factory('Website', ['$resource', function($resource){
	return $resource('products/:productId.json', {}, {
		query: {
			method:'GET',
			params:{productId:'products'},
			isArray:true
		}
	});
}]);