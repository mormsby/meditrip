angular.module('MTApp').factory('DataService',['$q','$log', '$http', '$location'/*, 'DATA_PATH'*/, function($q, $log, $http,$location/*, DATA_PATH*/){

	//Return the list of hotel and the associated data.
	var getHotelList = function() {
		 var deferred = $q.defer();
		 deferred.resolve(
		    		 $http.jsonp(DATA_PATH.hotelList)
		    		 );
		     return deferred.promise;  
	};

	//Will be used to search the hotel based on name
	var searchHotelList = function(searchQuery) {
		var results = getHotelList();
	}

	return {
		getHotelList: getHotelList		
    };	
	
}]);