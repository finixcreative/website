/* Controllers */

var websiteControllers = angular.module('websiteControllers', [
	'ngAnimate',
	'ngRoute'
]);
websiteControllers.controller('productController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('json/' + $routeParams.productName + '.json').success(function(data) {
		$scope.products = data;
	});
}]);
websiteControllers.controller('teamController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('json/' + $routeParams.personName + '.json').success(function(data) {
		$scope.people = data;
	});
}]);
websiteControllers.controller('articlesController', function(){
	this.products = articles;
});
websiteControllers.controller('socialController', function(){
	this.products = social;
});
websiteControllers.controller('SlideController', function(){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});