angular.module('websiteDirective')
	.directive('appheader', function(){
		return {
			restrict: 'E',
			template: 'widgets/header/header.html'
		};
	});