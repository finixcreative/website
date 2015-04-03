angular.module('tabsMod', ['ngAnimate', 'ngRoute'])
	.controller('TabController', function() {
		this.tab = "/";
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});