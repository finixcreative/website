angular.module('websiteControllers', ['ngAnimate', 'ngRoute'])
	.controller('articlesController', ['$scope', 'Articles', function($scope, Articles) {
		$scope.articles = Articles.query();
	}]);