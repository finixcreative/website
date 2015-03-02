angular.module('websiteControllers', ['websiteServices'])
	.controller('slidesController', ['$scope', 'Slides', function($scope, Slides) {
		$scope.images = Slides.query();
	}]);