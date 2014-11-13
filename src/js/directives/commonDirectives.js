angular.module('MTApp').directive('clickLink', ['$location', function($location) {
	/**
	 * clickLink is use to faciliate app navigation where href are not applicable
	 * e.g. href cannot be used on <button> tags
	 */
    return {
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                    $location.path(attrs.clickLink);
                });
            });
        }
    }
}]);


angular.module('MTApp').directive('match',['$parse',function($parse){
	/**
	 * match is used to compare too fields to be equal.
	 * e.g. password and password confirmation field.
	 */
	function link(scope,element,attrs,ctrl){
		if (!ctrl) return; //ng-model not defined
		if (!attrs.match) return; //model to match not defined

		var parsePassword = $parse(attrs.match);

		var validator = function(value) {
			var result = angular.equals(parsePassword(scope), value);
			ctrl.$setValidity('match', result);
			return value;
		}

		ctrl.$parsers.unshift(validator);
		ctrl.$formatters.push(validator);
		scope.$watch(attrs.match,function(){
			validator(ctrl.$viewValue);
		})
	}

	return {
		restrict: 'A',
		require: '?ngModel',
		link: link
	}
}]);

angular.module('MTApp').directive('ga', [function(){
	return {
		link: function(scope,element,attrs,ctrl) {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			
			ga('create', 'UA-56699909-1', 'auto');
			ga('send', 'pageview');
		}
	}
}]);
