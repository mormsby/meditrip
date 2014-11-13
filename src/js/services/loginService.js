angular.module('MTApp').factory('LoginService',['$location', function($location){

	var userLogin = function(user, onSuccessCallBack, onFailCallBack) {

			return true;
	};

	var isLoginPage = function() {
		
	};

	return {
		userLogin: userLogin,
		isLoginPage: isLoginPage		
    };	
	
}]);