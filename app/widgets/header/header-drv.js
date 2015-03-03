angular.module('headerMod', [])
	.directive('appheader', function(){
		return {
			restrict: 'E',
			template: 'http://finixcreative.github.io/website/app/widgets/header/header.html'
		};
	});