(function (window, angular, undefined) {
	'use strict';
	angular.module('ngRepeatArea', ['ng']).directive('ngRepeatArea', function () {
		// return the directive link function. (compile function not needed)
		return {
			scope:    true,
			restrict: 'EACM',
			priority: 2000,
			compile:  function (tElement, tAttrs, transclude) {
				var children = tElement.children();
				var itemsToRemove = children.length - 1;
				for (var i = 0; i < itemsToRemove; i++) {
					children.eq(i).remove();
				}
			}
		}
	});
})(window, window.angular);
