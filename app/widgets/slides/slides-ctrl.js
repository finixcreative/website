angular.module('websiteControllers', ['websiteServices'])
	.controller('SlidesController', ['$scope', 'Slides', function($scope, Slides) {
		$scope.images = Slides.query();
	}]);