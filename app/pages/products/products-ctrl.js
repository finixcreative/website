angular.module('productsMod')
	.controller('ProductsController', function(){
		this.products = products;
	})
	.controller('WebController', function(){
		this.products = web;
	})
	.controller('BrandController', function(){
		this.products = brand;
	})
	.controller('EmailController', function(){
		this.products = email;
	})
	.controller('SocialController', function(){
		this.products = social;
	})
	.controller('PrintController', function(){
		this.products = print;
	});