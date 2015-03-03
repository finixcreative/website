angular.module('slides')
	.controller('SlidesController', ['$scope', 'Slides', function($scope, Slides) {
		$scope.images = Slides.query();
	}]);