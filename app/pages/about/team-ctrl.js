angular.module('websiteControllers', ['websiteServices'])
	.controller('teamController', ['$scope', 'Profiles', function($scope, Profiles) {
		$scope.profiles = Profiles.query();
	}]);