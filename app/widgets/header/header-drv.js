angular.module('headerMod', [])
	.directive('appheader', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/widgets/header/header.html'
		};
	});