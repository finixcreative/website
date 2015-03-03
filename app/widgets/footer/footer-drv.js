angular.module('footerMod', [])
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			template: '#/app/widgets/footer/footer.html'
		};
	});