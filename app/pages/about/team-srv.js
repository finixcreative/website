angular.module('teamMod', ['ngResource'])
	.factory('Profiles', ['$resource', function ProfilesFactory($resource){
		return $resource('/website/app/pages/about/profiles/:profileId.json', {}, {
			query: {
				method: 'GET',
				params: {profileId: 'profiles'},
				isArray: true
			}
		});
	}]);