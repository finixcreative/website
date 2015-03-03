angular.module('articlesMod')
	.controller('ArticlesController', ['$scope', 'Articles', function($scope, Articles) {
		$scope.articles = Articles.query();
	}]);