var app = angular.module("MTApp", [ "snap", "toaster", "ngRoute", "ngResource", "ngTouch", "angular-carousel", "angularSpinner", "toaster", "ui.bootstrap" ]);

app.config([ "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        controller: "HomeController",
        templateUrl: "/partials/home.html"
    });
    $routeProvider.otherwise({
        redirectTo: "/"
    });
    $locationProvider.html5Mode(true);
} ]);

angular.module("MTApp").constant("MTAppConstants", {
    gaKey: "UA-56699909-1"
});

var CONST = {
    appKey: "kid_TVslN-7yHi",
    appSecret: "62950f04922b41d5b836b8f4c470c4c6",
    emptyString: ""
};

var ERROR_MSG = {
    title: {
        connectionError: "Connection Error"
    },
    type: {
        error: "error",
        warning: "warning",
        success: "success",
        info: "info"
    },
    loginFailed: "Login failed, please check your credentials",
    connectionFailed: "Connection failed :( please check your wifi or data connection."
};

var URI_PATH = {
    root: "/"
};

var DATA_PATH = {
    hotelList: "/HotelList"
};

angular.module("MTApp.constants", []).constant("CONST", CONST).constant("ERROR_MSG", ERROR_MSG).constant("URI_PATH", URI_PATH).constant("DATA_PATH", DATA_PATH);

angular.module("MTApp").controller("HomeController", [ "$scope", "$location", "DataService", "$modal", "$window", function($scope, $location, DataService, $modal, $window) {
    $scope.hotels;
    $scope.filterValue;
    $scope.query;
    var gaEvent = {
        category: "Search",
        action: "Searching",
        label: ""
    };
    $scope.setupHospitalData = function() {
        DataService.getHotelList().then(function(response) {
            $scope.hotels = response.data;
            console.log(response.data);
        }, function(response) {
            console.error("Unable to get the list of data");
            console.error(response);
        });
    };
    $scope.open = function(contactDetails) {
        var modalInstance = $modal.open({
            templateUrl: "partials/myModalContent.html",
            controller: "ModalInstanceCtrl",
            resolve: {
                contactDetails: function() {
                    return contactDetails;
                }
            }
        });
    };
    $scope.search = function() {
        gaEvent.label = $scope.filterValue = $scope.query;
        if ($scope.query != "" || $scope.query != null) {
            console.log("Searching for ", $scope.query, " label: ", gaEvent.label);
            $window.ga("send", "event", gaEvent.category, gaEvent.action, gaEvent.label);
        }
    };
    $scope.setupHospitalData();
} ]);

angular.module("MTApp").controller("ModalInstanceCtrl", function($scope, $modalInstance, contactDetails) {
    $scope.contactDetails = contactDetails;
    console.log(contactDetails);
    $scope.ok = function() {
        $modalInstance.dismiss("cancel");
    };
});

angular.module("MTApp").controller("CommonCtrl", [ "$scope", "$location", "LoginService", "ERROR_MSG", "toaster", "CommonService", function($scope, $location, LoginService, ERROR_MSG, toaster, CommonService) {} ]);

angular.module("MTApp").directive("ga", [ "$window", "MTAppConstants", function($window, MTAppConstants) {
    return {
        link: function(scope, element, attrs, ctrl) {
            (function(i, s, o, g, r, a, m) {
                i["GoogleAnalyticsObject"] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
                a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
            $window.ga("create", MTAppConstants.gaKey, "auto");
            $window.ga("send", "pageview");
        }
    };
} ]);

angular.module("MTApp").directive("gaTrackClick", [ "$window", function($window) {
    return {
        link: function(scope, element, attrs, ctrl) {
            $(element).on("click", function() {
                var gaEvent = {
                    category: attrs.gaEventCategory,
                    action: attrs.gaEventAction,
                    label: attrs.gaEventLabel
                };
                $window.ga("send", "event", gaEvent.category, gaEvent.action, gaEvent.label);
            });
        }
    };
} ]);

angular.module("MTApp").factory("CommonService", [ "$location", function($location) {
    var prepUser = function(user) {
        var user = angular.copy(user);
        delete user.confpassword;
        user.username = user.username.toLowerCase();
        user.teams = 0;
        user.points = 0;
        return user;
    };
    return {
        prepUser: prepUser
    };
} ]);

angular.module("MTApp").factory("DataService", [ "$q", "$log", "$http", "$location", function($q, $log, $http, $location) {
    var getHotelList = function() {
        var deferred = $q.defer();
        deferred.resolve($http.jsonp(DATA_PATH.hotelList));
        return deferred.promise;
    };
    var searchHotelList = function(searchQuery) {
        var results = getHotelList();
    };
    return {
        getHotelList: getHotelList
    };
} ]);

angular.module("MTApp").factory("LoginService", [ "$location", function($location) {
    var userLogin = function(user, onSuccessCallBack, onFailCallBack) {
        return true;
    };
    var isLoginPage = function() {};
    return {
        userLogin: userLogin,
        isLoginPage: isLoginPage
    };
} ]);

angular.module("MTApp").factory("LogoutService", [ "$location", function($location) {
    var userLogout = function(onSuccessCallBack, onFailCallBack) {};
    return {
        userLogout: userLogout
    };
} ]);