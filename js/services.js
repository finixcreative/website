'use strict';

/* Services */

var websiteServices = angular.module('websiteServices', [
	'ngResource'
]);
websiteServices.factory('Slides', [
	'$resource',
	function($resource){
		return $resource('widgets/slides/:slideId.json', {}, {
			query: {
				method:'GET',
				params: {
					slideId:'slides'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Products', [
	'$resource',
	function($resource) {
		return $resource('pages/products/products/products.json', {}, {
			query: {
				method:'GET',
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Articles', [
	'$resource',
	function($resource){
		return $resource('pages/articles/articles/:articleId.json', {}, {
			query: {
				method:'GET',
				params: {
					articleId:'articles'
				},
				isArray: true
			}
		});
	}
]);
websiteServices.factory('Team', [
	'$resource',
	function($resource){
		return $resource('pages/about/team/:profileId.json', {}, {
			query: {
				method:'GET',
				params: {
					profileId:'profiles'
				},
				isArray: true
			}
		});
	}
]);