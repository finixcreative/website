angular.module('contactMod', [])
	.directive('contact', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/widgets/contact/contact.html'
		};
	});