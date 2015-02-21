/* Services */

var websiteServices = angular.module('websiteServices', [
	'ngResource'
]);
websiteServices.factory('Slides', [
	'$resource',
	function($resource){
		return $resource('slides/:slide.json', {}, {
			query: {
				method:'GET',
				params: {
					slide:'slides'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Products', [
	'$resource',
	function($resource){
		return $resource('products/products/:product.json', {}, {
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
websiteServices.factory('Articles', [
	'$resource',
	function($resource){
		return $resource('articles/articles/:article.json', {}, {
			query: {
				method:'GET',
				params: {
					article:'articles'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Team', [
	'$resource',
	function($resource){
		return $resource('about/team/:profile.json', {}, {
			query: {
				method:'GET',
				params: {
					profile:'profiles'
				},
				isArray: true
			}
		});
	}
]);