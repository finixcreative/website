angular.module('websiteServices', ['ngResource'])
	.factory('Articles', ['$resource', function ArticlesFactory($resource){
		return $resource('pages/articles/articles/', {}, {
			query: {
				method: 'GET',
				isArray: true
			};
		});
	}]);