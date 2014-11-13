var app = angular.module("MTApp", [ "snap", "toaster", "ngRoute", "ngResource", "ngTouch", "angular-carousel", "angularSpinner", "toaster", "ui.bootstrap", "MTApp.constants" ]);

app.config([ "$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/partials/home.html"
    });
    $routeProvider.otherwise({
        redirectTo: "/"
    });
} ]);

app.config([ "$provide", "$httpProvider", function($provide, $httpProvider) {
    $provide.factory("httpInterceptor", [ "$q", "toaster", function($q, toaster) {
        return {
            response: function(response) {
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                console.log(rejection);
                if (rejection.status == 404) {
                    toaster.pop(ERROR_MSG.type.error, ERROR_MSG.title.connectionError, ERROR_MSG.connectionFailed, 0);
                    return $q.reject(rejection);
                }
                return $q.reject(rejection);
            }
        };
    } ]);
    $httpProvider.interceptors.push("httpInterceptor");
} ]);

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

angular.module("MTApp.constants", []).constant("CONST", CONST).constant("ERROR_MSG", ERROR_MSG).constant("URI_PATH", URI_PATH);

angular.module("MTApp").controller("CommonCtrl", [ "$scope", "$location", "LoginService", "ERROR_MSG", "toaster", "CommonService", function($scope, $location, LoginService, ERROR_MSG, toaster, CommonService) {} ]);

angular.module("MTApp").directive("clickLink", [ "$location", function($location) {
    return {
        link: function(scope, element, attrs) {
            element.on("click", function() {
                scope.$apply(function() {
                    $location.path(attrs.clickLink);
                });
            });
        }
    };
} ]);

angular.module("MTApp").directive("match", [ "$parse", function($parse) {
    function link(scope, element, attrs, ctrl) {
        if (!ctrl) return;
        if (!attrs.match) return;
        var parsePassword = $parse(attrs.match);
        var validator = function(value) {
            var result = angular.equals(parsePassword(scope), value);
            ctrl.$setValidity("match", result);
            return value;
        };
        ctrl.$parsers.unshift(validator);
        ctrl.$formatters.push(validator);
        scope.$watch(attrs.match, function() {
            validator(ctrl.$viewValue);
        });
    }
    return {
        restrict: "A",
        require: "?ngModel",
        link: link
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