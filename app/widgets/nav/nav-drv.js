angular.module('websiteDirectives')
	.directive('navigation', function(){
		return {
			restrict: 'E',
			template: 'widgets/nav/nav.html'
		};
	});