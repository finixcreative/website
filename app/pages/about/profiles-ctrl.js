angular.module('profilesMod')
	.controller('ProfilesController', function(){
		this.profiles = profiles;
	})
	.controller('RsmithController', function(){
		this.profiles = rsmith;
	});