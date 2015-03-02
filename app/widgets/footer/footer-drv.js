angular.module('websiteDirectives', ['websiteControllers'])
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			template: 'app/widgets/footer/footer.html'
		};
	});