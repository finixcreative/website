angular.module('websiteControllers', ['ngAnimate', 'ngRoute'])
	.controller('tabController', function() {
		this.tab = "/";
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});