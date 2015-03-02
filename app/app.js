angular.module('websiteApp', ['ngRoute', 'ngAnimate', 'websiteControllers', 'websiteServices'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/products', {
				templateUrl: 'app/pages/products/products.html',
				controller: 'ProductsController',
				controllerAs: 'products'
			})
			.when('/products/:productId', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'ProductDetailController',
				controllerAs: 'productdetails'
			})
			.when('/support', {
				templateUrl: 'app/pages/support/support.html',
			})
			.when('/articles', {
				templateUrl: 'app/pages/articles/articles.html',
				controller: 'ArticlesController'
				controllerAs: 'articles'
			})
			.when('/about', {
				templateUrl: 'app/pages/about/about.html',
				controller: 'TeamController'
				controllerAs: 'profiles'
			})
			.when('/about/:profileId', {
				templateUrl: 'app/pages/about/profile.html',
				controller: 'TeamController'
				controllerAs: 'profiledetails'
			})
			.when('/contact', {
				templateUrl: 'app/pages/contact/contact.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);