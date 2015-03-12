angular.module('copyrightMod', [])
	.directive('copyright', function(){
		return {
			restrict: 'E',
			templateUrl: '/website/app/widgets/copyright/copyright.html'
		};
	});