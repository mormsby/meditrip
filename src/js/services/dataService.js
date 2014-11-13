angular.module('MTApp').factory('DataService',['$q','$log', '$http', '$location'/*, 'DATA_PATH'*/, function($q, $log, $http,$location/*, DATA_PATH*/){
	
	var getHotelList = function() {
		 var deferred = $q.defer();
		 deferred.resolve(
		    		 $http.jsonp(DATA_PATH.hotelList)
		    		 );
		     return deferred.promise;  
	};

	var searchHotelList = function() {
		var results = getHotelList();
	}

	return {
		getHotelList: getHotelList		
    };	
	
}]);