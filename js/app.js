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
			url: '/products/web',
			icon: 'images/icons/icon-web.png',
			icontag: 'Icon - Web',
			description: 'The first step for any new company! Logo creation and brand identity development give your fledgeling business a professional look.',
		},
		{
			name: 'Branding',
			src: 'images/products/brand.jpg',
			url: '/products/brand',
			icon: 'images/icons/icon-brand.png',
			icontag: 'Icon - Brand',
			description: 'In the internet-driven marketplace, every business needs a professional website to stay in the game. Without a strong online presence, many potential customers will never find your business.',
		},
		{
			name: 'Email Marketing',
			src: 'images/products/email.jpg',
			url: '/products/email',
			icon: 'images/icons/icon-email.png',
			icontag: 'Icon - Email',
			description: 'The quickest way to connect with new customers and drive traffic to your website is with a targeted email marketing campaign, or "email blast". If you are promoting a special deal, a new product or service, or just trying to build up a customer base, we give you the tools you need to reach your goals.',
		},
		{
			name: 'Print Design',
			src: 'images/products/print.jpg',
			url: '/products/print',
			icon: 'images/icons/icon-print.png',
			icontag: 'Icon - Print',
			description: 'Complete your branding package with custom printed materials for local networking needs. From business cards to advertisement design, we can provide you professional, eye-catching designs for all of your needs.',
		},
		{
			name: 'Social Media',
			src: 'images/products/social.jpg',
			url: '/products/social',
			icon: 'images/icons/icon-social.png',
			icontag: 'Icon - Social',
			description: 'Social Media is a great way to connect with customers and promote your business. A study of several Wall Street businesses found a 99% correlation between their number of social media "likes" and the value of each stock. Every business has something to gain from building a social media presence!',
		}
	];
})();