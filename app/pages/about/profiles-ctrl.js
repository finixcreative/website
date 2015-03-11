angular.module('profilesMod')
	.controller('ProfilesController', ['$scope', 'Profiles', function($scope, Profiles) {
	//	$scope.profiles = Profiles.query();
		$scope.profiles = profiles;
	}]);