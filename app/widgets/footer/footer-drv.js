angular.module('websiteDirective')
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			template: 'widgets/footer/footer.html'
		};
	});