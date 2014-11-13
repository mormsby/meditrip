var app = angular.module("MTApp", [ "snap", "toaster", "ngRoute", "ngResource", "ngTouch", "angular-carousel", "angularSpinner", "toaster", "ui.bootstrap" ]);

app.config([ "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
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
                    label: ""
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