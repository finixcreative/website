angular.module('slides')
	.directive('slides', function ($timeout) {
		return {
			restrict: 'E',
			replace: true,
			scope: {images: '='},
			templateUrl: 'app/widgets/slides/slides.html',
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
			}
		};
	});

images = [
	{
		"img": "assets/images/iStock_000013899547Large.jpg",
		"alt": "assets/images/bg1",
		"position": "center",
		"id": "slide2",
		"headline": "Title",
		"subheadline": "Subtitle",
		"text": "Lorem ipsum dolor sit amet, wisi ac hymenaeos elementum, est etiam vitae quam proin, eleifend donec arcu ut dolor, volutpat platea metus dictum elementum at eu, lacus etiam bibendum placerat conubia consectetuer. Ipsum lectus vestibulum molestias, habitant lacus vel volutpat at sed. Nisl elit venenatis vel nunc, ut inceptos vestibulum lorem, aliquam tempus, convallis non adipiscing odio vestibulum id eleifend, cum ac felis. Auctor sit sit a, inceptos sollicitudin nunc sollicitudin elementum ac. Consequat ut diam. Nisl sed lacus arcu, purus libero consequat, nonummy suscipit consequat non curabitur, faucibus parturient porttitor volutpat, donec arcu. Ligula tellus libero erat, pellentesque sed nec accumsan, sociis feugiat mauris nec urna est, congue ullamcorper nibh. In nec enim vulputate lorem mauris nibh, in elit eu sit nec at urna, pede hendrerit ac eu iaculis, malesuada tincidunt proin donec dui ligula quam, et sit ad pede gravida mi. Luctus quis mollis amet, gravida et ligula vitae tincidunt praesent nullam, egestas eget donec ullamcorper porttitor, dolor vestibulum, wisi nisl cursus eros feugiat. Enim nulla ac vestibulum, malesuada urna dui, sit eu, vel diam scelerisque lectus.",
		"links": [
			{
				"text": "Read More >",
				"url": "#/blog",
			},
		],
	},
	{
		"img": "assets/images/background-boston_skyline.png",
		"alt": "assets/images/bg1",
		"position": "top center",
		"id": "slide1",
		"headline": "Digital Marketing & Web Design",
		"subheadline": "Solutions for Small Businesses",
		"text": "We're a creative team on a mission to help great local businesses reach more customers. We offer a complete suite of digital marketing and design services that any small business can afford. So what are you waiting for?",
		"links": [
			{
				"text": "Get started >",
				"url": "#/products",
			},
		],
	}
];