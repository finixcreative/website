angular.module('websiteControllers', ['ngAnimate', 'ngRoute'])
	.controller('slidesController', ['$scope', 'Slides', function($scope, Slides) {
		$scope.images = Slides.query();
	}]);