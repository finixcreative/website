angular.module('Articles', ['ngResource'])
	.factory('Articles', ['$resource', function ArticlesFactory($resource){
		return $resource('app/pages/articles/articles/', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}]);