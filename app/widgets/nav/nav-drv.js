angular.module('navMod', [])
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: '/website/app/widgets/nav/nav.html'
		};
	});