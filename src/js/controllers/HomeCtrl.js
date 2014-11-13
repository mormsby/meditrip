angular.module('MTApp').controller('HomeController',['$scope','$location', 'DataService'/*,'LoginService', 'ERROR_MSG', 'toaster', 'CommonService'*/, function($scope, $location, DataService/*, LoginService, ERROR_MSG, toaster, CommonService*/){
	
	$scope.hotels;	//Store the list of hotels
	// console.log("welcome");

	//Get the data from hotels json file
	$scope.setupHospitalData = function (){
    	 DataService.getHotelList()
		 	 	.then(function(response){
		 	 		$scope.hotels = response.data;
		 	 		console.log(response.data);
		 	 	}, function(response){
		 	 		console.error("Unable to get the list of data");
		 	 		console.error(response);
		 	 	});
     };

     $scope.setupHospitalData();
}]);