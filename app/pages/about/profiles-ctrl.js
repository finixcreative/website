angular.module('profilesMod')
//	.controller('ProfilesController', ['$scope', 'Profiles', function($scope, Profiles) {
//	//	$scope.profiles = Profiles.query();
//		$scope.profiles = profiles;
//	}]);
	.controller('ProfilesController', [ '$http', function($http){
		var about = this;
		about.profiles = [];
		$http.get('app/pages/products/products/products.json').success(function(data){
			about.profiles = data;
		});
	}]);