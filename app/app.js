angular.module('websiteApp', ['ngRoute', 'ngAnimate', 'websiteControllers', 'websiteServices'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/products', {
				templateUrl: 'app/pages/products/products.html',
				controller: 'productsController',
				controllerAs: 'products'
			})
			.when('/products/:productId', {
				templateUrl: 'app/pages/products/views/product.html',
				controller: 'productDetailController'
				controllerAs: 'productdetails'
			})
			.when('/support', {
				templateUrl: 'app/pages/support/support.html',
			})
			.when('/articles', {
				templateUrl: 'app/pages/articles/articles.html',
				controller: 'articlesController'
				controllerAs: 'articles'
			})
			.when('/about', {
				templateUrl: 'app/pages/about/about.html',
				controller: 'teamController'
				controllerAs: 'profiles'
			})
			.when('/about/:profileId', {
				templateUrl: 'app/pages/about/profile.html',
				controller: 'teamController'
				controllerAs: 'profiledetails'
			})
			.when('/contact', {
				templateUrl: 'app/pages/contact/contact.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);