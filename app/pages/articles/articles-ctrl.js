angular.module('websiteControllers', ['websiteServices'])
	.controller('articlesController', ['$scope', 'Articles', function($scope, Articles) {
		$scope.articles = Articles.query();
	}]);