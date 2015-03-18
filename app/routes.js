angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/products', {
				templateUrl: 'app/pages/products/products.html',
				controller: 'ProductsController',
				controllerAs: 'products',
			})
			.when('/products/web', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'WebController',
				controllerAs: 'productdetails',
			})
			.when('/products/brand', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'BrandController',
				controllerAs: 'productdetails',
			})
			.when('/products/email', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'EmailController',
				controllerAs: 'productdetails',
			})
			.when('/products/print', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'PrintController',
				controllerAs: 'productdetails',
			})
			.when('/products/stuff', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'WebController',
				controllerAs: 'productdetails',
			})
			.when('/products/social', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'SocialController',
				controllerAs: 'productdetails',
			})
			.when('/support', {
				templateUrl: 'app/pages/support/support.html',
			})
//			.when('/articles', {
//				templateUrl: 'app/pages/articles/articles.html',
//				controller: 'ArticlesController',
//				controllerAs: 'articles'
//			})
			.when('/about', {
				templateUrl: 'app/pages/about/about.html',
				controller: 'ProfilesController',
				controllerAs: 'profiles',
			})
//			.when('/about/:profileId', {
//				templateUrl: 'app/pages/about/profile.html',
//				controller: 'ProfilesController',
//				controllerAs: 'profiledetails',
//			})
			.when('/contact', {
				templateUrl: 'app/pages/contact/contact.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);