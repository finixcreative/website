angular.module('slidesMod', ['ngResource'])
	.factory('Slides', ['$resource', function SlidesFactory($resource){
		return $resource('website/app/widgets/slides/slides/', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}]);