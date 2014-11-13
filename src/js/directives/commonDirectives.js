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