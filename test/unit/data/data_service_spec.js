'use strict';

describe('DataService', function(){
	var scope, $httpBackend;//we'll use these in our tests
	var mockDataJson = [
		{
		"id": 1, 
	    "hotelName": "Ms. Ormsby House",
    	"currency": "JMD",
    	"description": "sadf asdfo adsfo as", 
    	"ownerDetails":[
    			{
    				"ownerName": "Ormsby mother", 
    				"tele1": "12321321", 
    				"tele2": " 23o 2o3 ",
    				"email1": "sapdofnaso@gmail.com", 
    				"email2":""
    			}] , 
    	"address": "", 
    	"distance":[
    		{
    			"id":0,
    			"medicalFacility": "", 
    			"distance": "", 
    			"unit": "km"
    		}],
    	"rating" : 5.5,
	}
	];


	beforeEach(angular.mock.module('MTApp'));

	beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_){
     
       $httpBackend = _$httpBackend_;
       $httpBackend.when('JSONP', '').respond(mockDataJson);
 	
        //create an empty scope
       scope = $rootScope.$new();

    }));
	 
	iit("should have constant", function(){
		expect(DATA_PATH).toBeDefined();
	})
	iit("should have hotelFile url", function(){
		expect(DATA_PATH.hotelList).toBeDefined();
	});
});
