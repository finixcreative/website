/* Controllers */

var websiteControllers = angular.module('websiteControllers', [
	'ngAnimate',
	'ngRoute'
]);
websiteControllers.controller('productsController', [
	'$scope',
	'Products',
	function($scope, Products) {
		$scope.products = Products.query();
	}
]);
websiteControllers.controller('productController', [
	'$scope',
	'$routeParams',
	'Products',
	function($scope, $routeParams, Products) {
		$scope.product = Products.get({product: $routeParams.product}, function(product) {
			$scope.icon = product.icon;
		});
		$scope.setIcon = function(icon) {
			$scope.icon = icon;
		}
	}
]);
websiteControllers.controller('teamController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('json/team.js').success(function(data) {
		$scope.products = data;
	});
}]);
websiteControllers.controller('articlesController', function(){
	this.products = articles;
});
websiteControllers.controller('slidesController', [
	'$scope',
	'Slides',
	function($scope, Slides) {
		$scope.images = Slides.query();
	}
]);