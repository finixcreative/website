angular.module('websiteControllers', ['websiteServices'])
	.controller('ArticlesController', ['$scope', 'Articles', function($scope, Articles) {
		$scope.articles = Articles.query();
	}]);