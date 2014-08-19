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

	app.controller('ArticlesController', function(){
		this.products = articles;
	});

	var store = [
		{
			name: 'Web Design',
			src: 'images/products/web.jpg',
			url: '/products/web',
			icon: 'images/icons/icon-web.png',
			icontag: 'Icon - Web',
			shortdescription: 'In the internet-driven marketplace, every business needs a professional website to stay in the game. Without a strong online presence, many potential customers will never find your business.',
		},
		{
			name: 'Branding',
			src: 'images/products/brand.jpg',
			url: '/products/brand',
			icon: 'images/icons/icon-brand.png',
			icontag: 'Icon - Brand',
			shortdescription: 'The first step for any new company! Logo creation and brand identity development give your fledgeling business a professional look.',
		},
		{
			name: 'Email Marketing',
			src: 'images/products/email.jpg',
			url: '/products/email',
			icon: 'images/icons/icon-email.png',
			icontag: 'Icon - Email',
			shortdescription: 'The quickest way to connect with new customers and drive traffic to your website is with a targeted email marketing campaign, or "email blast". If you are promoting a special deal, a new product or service, or just trying to build up a customer base, we give you the tools you need to reach your goals.',
		},
		{
			name: 'Print Design',
			src: 'images/products/print.jpg',
			url: '/products/print',
			icon: 'images/icons/icon-print.png',
			icontag: 'Icon - Print',
			shortdescription: 'Complete your branding package with custom printed materials for local networking needs. From business cards to advertisement design, we can provide you with professional, eye-catching designs for all of your needs.',
		},
		{
			name: 'Social Media',
			src: 'images/products/social.jpg',
			url: '/products/social',
			icon: 'images/icons/icon-social.png',
			icontag: 'Icon - Social',
			shortdescription: 'Social Media is a great way to connect with customers and promote your business. A study of several Wall Street businesses found a 99% correlation between their number of social media "likes" and the value of each stock. Every business has something to gain from building a social media presence!',
		}
	];

	var articles = [
		{
			headline: 'Branding',
			subheadline: 'Identity by design',
			author: 'Richard Smith',
			image: 'images/article-branding.jpg',
			content: 'Lorem ipsum dolor sit amet, dui molestie tincidunt suscipit ipsum sem laoreet, cum sollicitudin massa luctus, suspendisse urna enim sit lobortis dolor, vitae eget tortor habitant eget, sodales lorem. Suscipit magna porttitor ut, vestibulum fusce error nascetur donec massa risus. Facilisi vivamus semper mauris, eget fusce et nostra sit, est euismod dolor, non cubilia curabitur unde facilisis amet rhoncus, sem eros enim tempus volutpat. Lacinia ipsum odio ac feugiat, donec dolor ipsum lectus consequat in, hymenaeos a ac, in neque, tristique sed faucibus elit. Mauris purus augue vestibulum, ac eros nihil egestas dictum cum vel, leo vitae vestibulum, elementum convallis dolor, vel sollicitudin a pellentesque. Et fames, a taciti porttitor lorem diam, urna ac, dui tincidunt amet turpis sit, est purus eget. Et congue et consectetuer. Molestie fermentum vulputate, feugiat turpis sollicitudin, laoreet ac amet enim et blandit.',
			date: '7.30.2014'
		},
		{
			headline: 'Instagram Tips',
			subheadline: '',
			author: 'Allison Vollmar',
			image: 'images/article-instagram_tips.jpg',
			content: 'Lorem ipsum dolor sit amet, dui molestie tincidunt suscipit ipsum sem laoreet, cum sollicitudin massa luctus, suspendisse urna enim sit lobortis dolor, vitae eget tortor habitant eget, sodales lorem. Suscipit magna porttitor ut, vestibulum fusce error nascetur donec massa risus. Facilisi vivamus semper mauris, eget fusce et nostra sit, est euismod dolor, non cubilia curabitur unde facilisis amet rhoncus, sem eros enim tempus volutpat. Lacinia ipsum odio ac feugiat, donec dolor ipsum lectus consequat in, hymenaeos a ac, in neque, tristique sed faucibus elit. Mauris purus augue vestibulum, ac eros nihil egestas dictum cum vel, leo vitae vestibulum, elementum convallis dolor, vel sollicitudin a pellentesque. Et fames, a taciti porttitor lorem diam, urna ac, dui tincidunt amet turpis sit, est purus eget. Et congue et consectetuer. Molestie fermentum vulputate, feugiat turpis sollicitudin, laoreet ac amet enim et blandit.',
			date: '8.10.2014'
		},
		{
			headline: 'Desktop Publishing',
			subheadline: '',
			author: 'Chris Baeckstrom',
			image: 'images/article-instagram_tips.jpg',
			content: 'Lorem ipsum dolor sit amet, dui molestie tincidunt suscipit ipsum sem laoreet, cum sollicitudin massa luctus, suspendisse urna enim sit lobortis dolor, vitae eget tortor habitant eget, sodales lorem. Suscipit magna porttitor ut, vestibulum fusce error nascetur donec massa risus. Facilisi vivamus semper mauris, eget fusce et nostra sit, est euismod dolor, non cubilia curabitur unde facilisis amet rhoncus, sem eros enim tempus volutpat. Lacinia ipsum odio ac feugiat, donec dolor ipsum lectus consequat in, hymenaeos a ac, in neque, tristique sed faucibus elit. Mauris purus augue vestibulum, ac eros nihil egestas dictum cum vel, leo vitae vestibulum, elementum convallis dolor, vel sollicitudin a pellentesque. Et fames, a taciti porttitor lorem diam, urna ac, dui tincidunt amet turpis sit, est purus eget. Et congue et consectetuer. Molestie fermentum vulputate, feugiat turpis sollicitudin, laoreet ac amet enim et blandit.',
			date: '8.10.2014'
		}
	];
})();