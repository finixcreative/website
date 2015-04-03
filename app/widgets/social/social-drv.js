angular.module('socialMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/widgets/social/social.html',
			controller: 'SocialController',
			controllerAs: 'social',
		};
	});