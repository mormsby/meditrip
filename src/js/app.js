var app = angular.module('MTApp', ['snap', 'toaster', 'ngRoute','ngResource','ngTouch','angular-carousel', 
								   'angularSpinner', 'toaster', 'ui.bootstrap'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      //controller : 'HomeController',
      templateUrl : '/partials/home.html'
    });

	$routeProvider.otherwise({
        redirectTo: '/'
	});
	
	$locationProvider.html5Mode(true);
}]);

