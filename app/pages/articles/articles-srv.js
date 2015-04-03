angular.module('articlesMod', ['ngResource'])
	.factory('Articles', ['$resource', function ArticlesFactory($resource){
		return $resource('/website/app/pages/articles/articles/', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}]);