angular.module('navMod', [])
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/widgets/nav/nav.html'
		};
	});