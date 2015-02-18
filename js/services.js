/* Services */

var websiteServices = angular.module('websiteServices', [
	'ngResource'
]);
websiteServices.factory('Slider', [
	'$resource',
	function($resource){
		return $resource('slides/:slide.json', {}, {
			query: {
				method:'GET',
				params: {
					slider:'slides'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Products', [
	'$resource',
	function($resource){
		return $resource('products/:product.json', {}, {
			query: {
				method:'GET',
				params: {
					product:'products'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Blog', [
	'$resource',
	function($resource){
		return $resource('blog/:article.json', {}, {
			query: {
				method:'GET',
				params: {
					blog:'articles'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Team', [
	'$resource',
	function($resource){
		return $resource('team/:profile.json', {}, {
			query: {
				method:'GET',
				params: {
					team:'profiles'
				},
				isArray: true
			}
		});
	}
]);