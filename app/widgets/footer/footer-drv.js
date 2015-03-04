angular.module('footerMod', [])
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			templateUrl: '/website/app/widgets/footer/footer.html'
		};
	});