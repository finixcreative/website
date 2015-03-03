angular.module('team')
	.controller('TeamController', ['$scope', 'Profiles', function($scope, Profiles) {
		$scope.profiles = Profiles.query();
	}]);