angular.module('MTApp').factory('LogoutService',['$location', function( $location){

	var userLogout = function(onSuccessCallBack, onFailCallBack) {
		//makes service call to kinvey endpoint
        
	};

	return {
		userLogout: userLogout		
    };	
	
}]);