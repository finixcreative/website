angular.module('headerMod', [])
	.directive('appheader', function(){
		return {
			restrict: 'E',
			template: 'header.html'
		};
	});