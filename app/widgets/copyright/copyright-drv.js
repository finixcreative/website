angular.module('copyrightMod', [])
	.directive('copyright', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/widgets/copyright/copyright.html'
		};
	});