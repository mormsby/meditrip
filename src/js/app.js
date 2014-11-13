var app = angular.module('MTApp', 
[
	'snap', 'toaster', 'ngRoute','ngResource','ngTouch','angular-carousel', 'angularSpinner',
  'toaster', 'ui.bootstrap', 'MTApp.constants'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      otherwise({
        redirectTo: '/'
      });
  }]); 


/* httpInterceptor is used to examine each http request
 * and determine if a request to the backend has failed
 * by checking relevant the status code where necessary
 */
app.config(['$provide','$httpProvider', function($provide, $httpProvider) {
  
  $provide.factory('httpInterceptor', ['$q', 'toaster', function($q, toaster){
    return {
      'response': function(response) {
        return response || $q.when(response);
      },
      'responseError': function(rejection) {
        console.log(rejection);
        if(rejection.status == 404) {
          toaster.pop(ERROR_MSG.type.error, ERROR_MSG.title.connectionError, ERROR_MSG.connectionFailed, 0);
          return $q.reject(rejection)
        }
        return $q.reject(rejection);
      }
    };
  }]);

  $httpProvider.interceptors.push('httpInterceptor');
}]);

