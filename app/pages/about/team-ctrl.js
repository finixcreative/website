angular.module('websiteControllers')
	.controller('teamController', ['$scope', 'Profiles', function($scope, Profiles) {
		$scope.profiles = Profiles.query();
	}]);