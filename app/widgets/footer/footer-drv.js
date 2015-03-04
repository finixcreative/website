angular.module('footerMod', [])
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			template: '/website/app/widgets/footer/footer.html'
		};
	});