/* Controllers */

var websiteControllers = angular.module('websiteControllers', [
	'ngAnimate',
	'ngRoute'
]);
websiteControllers.controller('productController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('json/products/' + $routeParams.productName + '.json').success(function(data) {
		$scope.products = data;
	});
}]);
websiteControllers.controller('teamController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('json/' + $routeParams.personName + '.json').success(function(data) {
		$scope.people = data;
	});
}]);
websiteControllers.controller('articlesController', function(){
	this.products = articles;
});
websiteControllers.controller('slidesController', function($scope) {
	$scope.images = [
		{
			img: 'images/background-boston_skyline.png',
			alt: 'images/bg1',
			position: 'center right',
			id: 'slide1',
			headline: 'Digital Marketing & Web Design',
			subheadline: 'Solutions for Small Businesses',
			text: "We're a creative team on a mission to help great local businesses reach more customers. We offer a complete suite of digital marketing and design services that any small business can afford. So what are you waiting for?",
			links: [
				{
					text: 'Get started >',
					url: '#/products',
				},
			],
		},
		{
			img: 'images/background-boston_skyline.png',
			alt: 'images/bg1',
			position: 'center right',
			id: 'slide2',
			headline: 'Title',
			subheadline: 'Subtitle',
			text: "Text",
			links: [
				{
					text: 'Read More >',
					url: '#/blog',
				},
			],
		},
	]; 
});
websiteControllers.directive('slider', function ($timeout) {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			images: '='
		},
		templateUrl:'html/slider.html',
		link: function (scope, elem, attrs) {
			scope.currentIndex = 0;
			scope.next = function(){
				scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
			};
			scope.prev = function(){
				scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
			};
			scope.$watch('currentIndex', function() {
				scope.images.forEach(function(image) {
					image.visible = false;
				});
				scope.images[scope.currentIndex].visible = true;
			});
			var timer;
			var sliderFunc = function() {
				timer = $timeout(function() {
					scope.next();
					timer = $timeout(sliderFunc, 15000);
				}, 15000);
			};
			sliderFunc();
			scope.$on('$destroy', function() {
				$timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
			});
		},
	};
});