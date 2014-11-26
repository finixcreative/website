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
			url: 'html/product-web.html',
			link: 'slide.selectTab(6)',
			icon: 'images/icons/icon-web.png',
			icontag: 'Icon - Web',
			shortdescription: 'In the internet-driven marketplace, every business needs a professional website to stay in the game. Without a strong online presence, many potential customers will never find your business.',
			longdescription: 'In the internet-driven marketplace, every business needs a professional website to stay in the game. Without a strong online presence, many potential customers will never find your business.',
		},
		{
			name: 'Branding',
			src: 'images/products/brand.jpg',
			url: 'html/product-brand.html',
			link: 'slide.selectTab(7)',
			icon: 'images/icons/icon-brand.png',
			icontag: 'Icon - Brand',
			shortdescription: 'The first step for any new company! Logo creation and brand identity development give your fledgeling business a professional look.',
		},
		{
			name: 'Email Marketing',
			src: 'images/products/email.jpg',
			url: 'html/product-email.html',
			link: 'slide.selectTab(8)',
			icon: 'images/icons/icon-email.png',
			icontag: 'Icon - Email',
			shortdescription: 'The quickest way to connect with new customers and drive traffic to your website is with a targeted email marketing campaign, or "email blast". If you are promoting a special deal, a new product or service, or just trying to build up a customer base, we give you the tools you need to reach your goals.',
		},
		{
			name: 'Print Design',
			src: 'images/products/print.jpg',
			url: 'html/product-print.html',
			link: 'slide.selectTab(9)',
			icon: 'images/icons/icon-print.png',
			icontag: 'Icon - Print',
			shortdescription: 'Complete your branding package with custom printed materials for local networking needs. From business cards to advertisement design, we can provide you with professional, eye-catching designs for all of your needs.',
		},
		{
			name: 'Social Media',
			src: 'images/products/social.jpg',
			url: 'html/product-social.html',
			link: 'slide.selectTab(10)',
			icon: 'images/icons/icon-social.png',
			icontag: 'Icon - Social',
			shortdescription: 'Social Media is a great way to connect with customers and promote your business. A study of several Wall Street businesses found a 99% correlation between their number of social media "likes" and the value of each stock. Every business has something to gain from building a social media presence!',
		}
	];

	var team = [
		{
			name: "Richard Smith",
			title: "Co-founder",
			email: "rsmith@finixcreative.com",
			phone: "203-295-4369",
			portrait: "images/team/richard_smith.jpg",
			portraitalt: "Richard Smith",
			bio: "Richard puts on his pants like everyone else, one leg at a time.",
			link: "/website/html/rsmith.html",
			altlink: "www.linkedin.com/in/richardrsmith3/",
			letter: {
				p1: "I am excited to apply for Hampshire College’s new position of Chief Creative Officer. Hampshire is a beacon of progressive ideas, creativity, and intellectual freedom. The college’s incomparable opportunities attract students from all over the world, who represent a vast range of cultural norms and economic backgrounds. Building strong connections with that diverse and scattered audience poses unique marketing challenges, so Hampshire needs a dedicated and talented CCO to lead the way.",
				p2: "I have a profound appreciation for Hampshire’s tradition of academic excellence, and I hold the motto “Non Satis Scire” close to heart. I graduated with my degree in “Graphic Design & Sign Making” in May 2009, but retained my passion for learning. Soon after, I expanded my horizons from “traditional” studio art and graphic design by adopting web code as my new paintbrush, and the internet as my new canvass. I gained valuable skills and experience at every stop in my career, excelling as a Production Artist, Marketing Consultant, Web Designer, UX Designer, Creative Director, and Co-founder of a creative collective. I have found success with companies of all sizes, across a range of industries, because great design is a universal language.",
				p3: "I held several positions with Propel Marketing. I was one of the company’s early hires, starting out as a junior web designer within months of the company’s launch. I soon became a senior web designer as Propel quickly expanded into a bustling 200-employee marketing firm, and I worked as a UX designer alongside the software development team to create proprietary apps for internal use. I also led a cross-department effort to redesign key pieces of the corporate website. I was a leader among my peers, stepping up to provide quality assurance, and establishing training courses to educate Propel’s designers about new tools and best-practices.",
				p4: "I am currently the Creative Director of Associated Environmental Systems (AES), where I lead all marketing and web development efforts. When I joined AES, I inherited a small and undeveloped marketing operation. I set out to strengthen the AES brand and get ahead of our competitors in the market, and my efforts have led to revelatory advancements. I designed a completely new corporate website with a focus towards providing a seamless user experience and bolstering conversion rates. I led a team of developers to create a dashboard app that records data from AES devices - the first of it’s kind in the industry. The app was instrumental in landing a large hardware contract with Apple. I also led successful marketing campaigns targeting high-profile clients including Apple, Boeing, DuPont, General Electric, General Motors, Gillette, Google, Hewlett Packard, Intel, Lockheed Martin, NASA, Nest, Procter & Gamble, and the U.S. Army, among others.",
				p5: "I have a bright vision for Hampshire’s future, and as Chief Creative Officer I would work tirelessly to turn that vision into reality. I want to build up the college’s reputation, develop a strong brand, leverage technology to share our message with new audiences around the world, and usher in a vibrant new class of students. I am eager to support the educational community that empowered me to explore my creativity and learn “outside the box”. I would be honored to help the next generation of activists, artists, inventors, farmers, filmmakers, performers, scientists, and writers to find opportunities that match their passions, and guide their first steps on a lifelong journey.",
			},
			jobs: [
				{
					position: "Co-Founder",
					company: "Finix",
					location: "Boston, MA",
					dates: "5/13 - Present",
					description: "Launched Finix in 2013 and oversaw all operations, product development, marketing, training, and recruitment. Designed the company logo, website, and product suite. Developed processes to fulfill each product package at minimal expense.",
				},
				{
					position: "Creative Director",
					company: "Associated Environmental Systems",
					location: "Ayer, MA",
					dates: "8/14 - Present",
					description: "Led all marketing and web development initiatives. Strengthened the AES brand and advance the company's position in the market. Designed a new corporate website focused towards user experience and conversion rates. Led a team of developers to create a dashboard app to record data from AES devices, which was instrumental in landing a large hardware contract with Apple. Developed successful marketing strategies targeting high-profile clients including Apple, Boeing, DuPont, General Electric, General Motors, Gillette, Google, Hewlett Packard, Intel, Lockheed Martin, NASA, Nest, Procter & Gamble, and the U.S. Army.",
				},
				{
					position: "Web Designer",
					company: "Propel Marketing",
					location: "Quincy, MA",
					dates: "10/12 – 8/14",
					description: "Designed websites, logos, and social media assets for client companies representing dozens of industries. Entrusted as quality assurance expert responsible for all responsive websites products built for client companies. Worked closely with the software development team as a User Interface and User Experience design specialist for both internal and client-facing product and application features.",
				},
				{
					position: "Marketing Coordinator",
					company: "Coldwell Banker",
					location: "Cambridge, MA",
					dates: "9/11 - 10/12",
					description: "Designed and produced marketing materials, including printed flyers, brochures, window displays, newspaper and magazine advertisements, e-flyers and email marketing campaigns. Worked closely with real estate brokers to customize marketing materials to fit the needs of individual client homeowners. Provided web design and photography services beyond the defined responsibilities of the position.",
				},
				{
					position: "Production Artist",
					company: "Monitor Group",
					location: "Cambridge, MA",
					dates: "9/10 – 7/11",
					description: "Created high-end visual graphics and logos for clients, edited internal PowerPoint presentations for consultants, and produced presentation materials. Designed and illustrated posters to advertise company events. Consistently requested to lead design projects beyond the responsibilities and scope of the Production Artist position.",
				},
			],
			schools: [
				{
					name: "Hampshire College",
					location: "Amherst, MA",
					dates: "9/05 - 5/09",
					degree: "Bachelor of Arts, Graphic Design & Sign Making",
				},
				{
					name: "Northern Essex Community College",
					location: "Haverhill, MA",
					dates: "9/04 - 6/11",
					degree: "Completed courses in Quark Xpress, Dreamweaver, Flash, HTML, and CSS.",
				},
			],
			references: [
				{
					name: "Jonathan Biddle",
					position: "Senior Software Engineer",
					company: "CustomMade",
					email: "",
					phone: "585-414-2344",
				},
				{
					name: "Tyrel Souza",
					position: "Ruby/Python Developer",
					company: "Propel Marketing",
					email: "tyrel@tyrelsouza.com",
					phone: "603-313-0388",
				},
				{
					name: "Cynthia Andre",
					position: "Product Manager",
					company: "Propel Marketing",
					email: "candre@propelmarketing.com",
					phone: "candre4@babson.edu",
				},
				{
					name: "",
					position: "",
					company: "",
					email: "",
					phone: "",
				},
			],
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
			bio: "Chris is pretty fly for a white guy.",
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
			bio: "Jack is chillin' like a villain.",
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
