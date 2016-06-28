angular.module('livingabroad.controllers', [])

.controller('profile', function($scope) {

	$scope.tags = ["tag1", "tag2", "tag3"];
  	$scope.links = [{'tipo':1, 'url':'www.google.com'}, {'tipo':2, 'url':'www.facebook.com'}, {'tipo':3, 'url':'www.github.com'}];

})