angular.module('websiteControllers')
	.controller('slidesController', ['$scope', 'Slides', function($scope, Slides) {
		$scope.images = Slides.query();
	}]);