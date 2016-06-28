var services = angular.module("livingabroad.services", []);

services.factory("Profile", function($http, $q) {
	return {
		addUrl: function() {
			var deferred = $q.defer();
			$http({
				method: "POST",
				url: "/profile//tag"
			})
			.success(function(result) {
				deferred.resolve(result.data);
			})
			.error(function(result, code) {
				deferred.reject("error");
			});
			return deferred.promise;
		}
	};
})