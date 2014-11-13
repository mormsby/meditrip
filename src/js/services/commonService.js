angular.module('MTApp').factory('CommonService',['$location', function($location){
  //prepares user object for registration(send to server).
  var prepUser = function(user) {
      
      var user = angular.copy(user); //copying user object and
      
      delete user.confpassword;    //deleting confpassword so column doesnt get added to kinvey

      user.username = user.username.toLowerCase();
      user.teams = 0;
      user.points = 0;
      
      return user;
  }

  return {
    prepUser: prepUser
  };
	
}]);