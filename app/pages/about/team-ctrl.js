angular.module('websiteControllers', ['websiteServices'])
	.controller('TeamController', ['$scope', 'Profiles', function($scope, Profiles) {
		$scope.profiles = Profiles.query();
	}]);