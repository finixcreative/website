angular.module('Slides')
	.controller('SlidesController', ['$scope', 'Slides', function($scope, Slides) {
		$scope.images = Slides.query();
	}]);