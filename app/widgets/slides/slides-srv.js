angular.module('websiteServices', ['ngResource'])
	.factory('Slides', ['$resource', function SlidesFactory($resource){
		return $resource('app/widgets/slides/', {}, {
			query: {
				method: 'GET',
				isArray: true
			};
		});
	}]);