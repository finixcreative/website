angular.module('header', [])
	.directive('appheader', function(){
		return {
			restrict: 'E',
			template: 'app/widgets/header/header.html'
		};
	});