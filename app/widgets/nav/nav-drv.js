angular.module('nav')
	.directive('navigation', function(){
		return {
			restrict: 'E',
			template: 'app/widgets/nav/nav.html'
		};
	});