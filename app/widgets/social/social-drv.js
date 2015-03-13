angular.module('socialMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			templateUrl: '/website/app/widgets/social/social.html',
			controller: 'SocialController',
			controllerAs: 'social',
		};
	});