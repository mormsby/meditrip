angular.module('MTApp').directive('ga', ['$window', 'MTAppConstants', function($window, MTAppConstants){
	return {
		link: function(scope,element,attrs,ctrl) {
			
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			
			$window.ga('create', MTAppConstants.gaKey, 'auto');
			$window.ga('send', 'pageview');
			
		}
	}
}]);
 
angular.module('MTApp').directive('gaTrackClick', ['$window', function($window){
	return {
		link: function(scope,element,attrs,ctrl) {
			$(element).on('click', function(){
				var gaEvent = {
					category: attrs.gaEventCategory,
					action: attrs.gaEventAction,
					label: attrs.gaEventLabel
				};
				$window.ga('send', 'event', gaEvent.category, gaEvent.action, gaEvent.label);
			});
		}
	}
}]);

