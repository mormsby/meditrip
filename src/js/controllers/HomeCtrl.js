angular.module('MTApp').controller('HomeController',['$scope','$location', 'DataService', '$modal', function($scope, $location, DataService, $modal){
	
	$scope.hotels;	//Store the list of hotels
	
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

     $scope.open = function () {
	   var modalInstance = $modal.open({
	     templateUrl: 'partials/myModalContent.html',
	     controller: 'ModalInstanceCtrl'
	   });
	 };

     $scope.setupHospitalData();
}]);