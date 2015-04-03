angular.module('footerMod', [])
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/widgets/footer/footer.html'
		};
	});