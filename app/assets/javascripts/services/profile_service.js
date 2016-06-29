var services = angular.module("livingabroad.services", ['ng-rails-csrf']);

services.factory("Profile", function($http, $q) {
	return {
		addTag: function(tag) {
			var deferred = $q.defer();
			$http({
				method: "POST",
				url: "/profile/tag",
				params: {'tag' : tag}
			})
			.success(function(result) {
				deferred.resolve(result.data);
			})
			.error(function(result, code) {
				deferred.reject("error");
			});
			return deferred.promise;
		},		
		addUrl: function(link) {
			var deferred = $q.defer();
			$http({
				method: "POST",
				url: "/profile/link",
				params: link
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