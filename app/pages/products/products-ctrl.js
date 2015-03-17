var app = angular.module('productsMod');
	app.controller('ProductsController', function(){
		this.products = products;
	});
	app.controller('WebController', function(){
		this.products = web;
	});
	app.controller('BrandController', function(){
		this.products = brand;
	});
	app.controller('EmailController', function(){
		this.products = email;
	});
	app.controller('PrintController', function(){
		this.products = print;
	});
	app.controller('SocialController', function(){
		this.products = social;
	});