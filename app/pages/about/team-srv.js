angular.module('Team', ['ngResource'])
	.factory('Profiles', ['$resource', function ProfilesFactory($resource){
		return $resource('app/pages/about/profiles/:profileId.json', {}, {
			query: {
				method: 'GET',
				params: {profileId: 'profiles'},
				isArray: true
			}
		});
	}]);