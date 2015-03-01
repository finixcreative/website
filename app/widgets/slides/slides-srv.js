angular.module('websiteServices', ['ngResource'])
	.factory('Slides', ['$resource', function SlidesFactory($resource){
		return $resource('widgets/slides/', {}, {
			query: {
				method: 'GET',
				isArray: true
			};
		});
	}]);