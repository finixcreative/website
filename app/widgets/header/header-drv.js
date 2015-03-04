angular.module('headerMod', [])
	.directive('appheader', function(){
		return {
			restrict: 'E',
			templateUrl: '/website/app/widgets/header/header.html'
		};
	});