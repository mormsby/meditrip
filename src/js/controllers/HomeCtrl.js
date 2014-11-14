angular.module('MTApp').controller('HomeController',['$scope','$location', 'DataService', '$modal', '$window', function($scope, $location, DataService, $modal, $window){
	
	$scope.hotels;	//Store the list of hotels
	$scope.filterValue;	//Store the search results.
	$scope.query;	//Search result will be stored here 
	var gaEvent = {
					category: 'Search',
					action: 'Searching',
					label: ''
				};


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

     $scope.open = function (contactDetails) {
	   var modalInstance = $modal.open({
	     templateUrl: 'partials/myModalContent.html',
	     controller: 'ModalInstanceCtrl',
	     resolve :{
	     	contactDetails : function(){
	     		return contactDetails;
	     	}
	     }
	   });
	 };

	 $scope.search = function () {
	 	gaEvent.label = $scope.filterValue = $scope.query;
	 	
	 	if($scope.query != '' || $scope.query != null){
			console.log("Searching for ", $scope.query, ' label: ', gaEvent.label);
		 	//Send the search results, and category to 
		 	$window.ga('send', 'event', gaEvent.category, gaEvent.action, gaEvent.label);
	 	}
	 }

     $scope.setupHospitalData();
}]);