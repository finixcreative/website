angular.module('websiteDirectives', ['websiteControllers'])
	.directive('navigation', function(){
		return {
			restrict: 'E',
			template: 'app/widgets/nav/nav.html'
		};
	});