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
					slides:'slides'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Products', [
	'$resource',
	function($resource){
		return $resource('pages/products/products/:product.json', {}, {
			query: {
				method:'GET',
				params: {
					products:'products'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Articles', [
	'$resource',
	function($resource){
		return $resource('pages/articles/articles/:article.json', {}, {
			query: {
				method:'GET',
				params: {
					articles:'articles'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Team', [
	'$resource',
	function($resource){
		return $resource('pages/about/team/:profile.json', {}, {
			query: {
				method:'GET',
				params: {
					profiles:'profiles'
				},
				isArray: true
			}
		});
	}
]);