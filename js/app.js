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

	app.controller('TeamController', function(){
		this.products = team;
	});

	app.controller('ArticlesController', function(){
		this.products = articles;
	});

	app.controller('SocialController', function(){
		this.products = social;
	});

	var store = [
		{
			name: 'Web Design',
			src: 'images/products/web.jpg',
			url: '/products/web',
			icon: 'images/icons/icon-web.png',
			icontag: 'Icon - Web',
			shortdescription: 'In the internet-driven marketplace, every business needs a professional website to stay in the game. Without a strong online presence, many potential customers will never find your business.',
			longdescription: 'In the internet-driven marketplace, every business needs a professional website to stay in the game. Without a strong online presence, many potential customers will never find your business.',
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

	var team = [
		{
			name: "Richard Smith",
			title: "Co-founder",
			portrait: "images/team/richard_smith.jpg",
			portraitalt: "Richard Smith",
			bio: "Richard puts on his pants like everyone else, one leg at a time.",
			link: "www.linkedin.com/in/richardrsmith3/",
		},
		{
			name: "Allison Vollmar",
			title: "Co-founder",
			portrait: "images/team/allison_vollmar.jpg",
			portraitalt: "Allison Vollmar",
			bio: "Allison woke up like this.",
			link: "www.linkedin.com/pub/allison-vollmar/8/ab2/610",
		},
		{
			name: "Penelope the Puppy",
			title: "Director of Mammal Resources",
			portrait: "images/team/penelope_smith_vollmar.jpg",
			portraitalt: "Penelope Smith-Vollmar",
			bio: "Penelope is the actual center of the universe.",
			link: "#",
		},
		{
			name: "Chris Baeckstrom",
			title: "Desktop Publisher",
			portrait: "images/team/chris_baeckstrom.jpg",
			portraitalt: "Chris Baeckstrom",
			bio: "Chris knows what you did last summer.",
			link: "www.linkedin.com/pub/christopher-baeckstrom/74/b7a/548",
		},
		{
			name: "Alex Cummings",
			title: "Game Developer",
			portrait: "images/team/alex_cummings.jpg",
			portraitalt: "Alex Cummings",
			bio: "Alex makes it rain.",
			link: "#",
		},
		{
			name: "Andrew Farrar",
			title: "Web Developer",
			portrait: "images/team/andrew_farrar.png",
			portraitalt: "Andrew Farrar",
			bio: "Andrew takes no prisoners.",
			link: "#",
		},
		{
			name: "Jack Norcross",
			title: "Legal Consultant",
			portrait: "images/team/jack_norcross.png",
			portraitalt: "Jack Norcross",
			bio: "Jack is pretty fly for a white guy.",
			link: "#",
		},
		{
			name: "Matt Fabian",
			title: "Game Developer",
			portrait: "images/team/matt_fabian.png",
			portraitalt: "Matt Fabian",
			bio: "Matt shot the Sheriff.",
			link: "#",
		},
		{
			name: "Adam Cole",
			title: "Sales Manager",
			portrait: "images/team/adam_cole.png",
			portraitalt: "Adam Cole",
			bio: "Adam is keeping it real.",
			link: "#",
		},
		{
			name: "Liam Norris",
			title: "Web Developer",
			portrait: "images/team/liam_norris.png",
			portraitalt: "Liam Norris",
			bio: "Liam has been around the world in 80 days.",
			link: "#",
		},
		{
			name: "Daniel Johnson",
			title: "Illustrator",
			portrait: "images/team/daniel_johnson.png",
			portraitalt: "Daniel Johnson",
			bio: "Dan made the Kessel Run in 12 parsecs.",
			link: "#",
		},
		{
			name: "Chris Vickery",
			title: "Web Developer",
			portrait: "images/team/chris_vickery.png",
			portraitalt: "Chris Vickery",
			bio: "Chris brakes for NOTHING.",
			link: "#",
		},
		{
			name: "Jason Jefferson",
			title: "System Administrator",
			portrait: "images/team/jason_jefferson.png",
			portraitalt: "Jason Jefferson",
			bio: "Jason reached Oregon without losing any oxen.",
			link: "#",
		},
		{
			name: "Mike Reinganum",
			title: "Music Producer",
			portrait: "images/team/mike_reinganum.png",
			portraitalt: "Mike Reinganum",
			bio: "Mike wrote a song for you.",
			link: "#",
		},
		{
			name: "Work with us!",
			title: "Many positions available",
			portrait: "images/team/portrait-batsignal.png",
			portraitalt: "Open Position",
			bio: "We're looking for talented, creative individuals to join our growing team.",
			link: "www.linkedin.com/company/finix",
		},
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

	var social = [
		{
			name: "facebook",
			link: "www.facebook.com/finixcreative",
		},
		{
			name: "twitter",
			link: "twitter.com/FinixCreative",
		},
		{
			name: "linkedin",
			link: "www.linkedin.com/company/finix",
		},
		{
			name: "google+",
			link: "plus.google.com/+Finixcreative",
		},
		{
			name: "instagram",
			link: "instagram.com/finixcreative",
		},
		{
			name: "pinterest",
			link: "www.pinterest.com/finixcreative",
		},
	];
})();