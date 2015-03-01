angular.module('websiteServices', ['ngResource'])
	.factory('Team', ['$resource', function TeamFactory($resource){
		return $resource('app/pages/about/team/', {}, {
			query: {
				method: 'GET',
				isArray: true
			};
		});
	}]);