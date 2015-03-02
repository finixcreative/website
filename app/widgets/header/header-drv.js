angular.module('websiteDirectives')
	.directive('appheader', function(){
		return {
			restrict: 'E',
			template: 'widgets/header/header.html'
		};
	});