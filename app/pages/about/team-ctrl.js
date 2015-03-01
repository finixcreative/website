angular.module('websiteControllers', ['ngAnimate', 'ngRoute'])
	.controller('teamController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
		$http.get('json/team.js').success(function(data) {
			$scope.products = data;
		});
	}]);