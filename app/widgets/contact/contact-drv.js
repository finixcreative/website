angular.module('contactMod', [])
	.directive('contact', function(){
		return {
			restrict: 'E',
			templateUrl: '/website/app/widgets/contact/contact.html'
		};
	});