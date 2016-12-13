(function (){
	'use strict';

	angular.module('ChallengerApp', ['ngRoute', 'ChallengerController'])
	.config(function($routeProvider) {
	$routeProvider.when('/season',
	 	{templateUrl:'partials/season.html'});
	$routeProvider.when('/beginner', 
    	{ templateUrl: 'partials/beginner.html', controller: 'WorkoutController' });
	$routeProvider.when('/random', 
    	{ templateUrl: 'partials/random.html' });
	$routeProvider.when('/beginner', 
		{ templateUrl: 'partials/beginner.html', controller: 'WorkoutController' });
	$routeProvider.when('/everyone', 
    	{ templateUrl: 'partials/everyone.html' });
	$routeProvider.otherwise({ redirectTo: '/home' });
});

	angular.module('', []);

})();