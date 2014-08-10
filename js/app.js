(function (){
	var app = angular.module('controllers', []);

	app.controller('SlideController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('StoreController', function(){
		this.products = store;
	});

	var store = [
		{
			name: 'Web Design',
			src: 'images/products/web.jpg',
			alt: 'Web Design',
			url: '/products/web',
		},
		{
			name: 'Branding',
			src: 'images/products/brand.jpg',
			alt: 'Branding',
			url: '/products/brand',
		},
		{
			name: 'Email Marketing',
			src: 'images/products/email.jpg',
			alt: 'Email Marketing',
			url: '/products/email',
		},
		{
			name: 'Print Design',
			src: 'images/products/print.jpg',
			alt: 'Print Design',
			url: '/products/print',
		},
		{
			name: 'Social Media',
			src: 'images/products/social.jpg',
			alt: 'Social Media',
			url: '/products/social',
		}
	];
})();