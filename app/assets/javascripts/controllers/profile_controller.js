var app = angular.module('livingabroad', ["livingabroad.services", "livingabroad.controller"]);

var controllers = angular.module('livingabroad.controller', [])

.controller('profile', function($scope, Profile) {

	$scope.profile = {};
	$scope.profile.tags = ["tag1", "tag2", "tag3"];
	$scope.profile.links = [{'type':1, 'url':'www.google.com'}, {'type':2, 'url':'www.facebook.com'}, {'type':3, 'url':'www.github.com'}];
	$scope.modeEdit = false;

	resetAll();	

	function resetAll() {
		resetNewTag();
		resetNewLink();
		resetNewDescription();
	}

	function resetNewTag() {
		$scope.newTag = "";
	}

	function resetNewLink() {
		$scope.newLink = {'type': 0, 'url': ''};
	}

	function resetNewDescription() {
		$scope.newDescription = "";
	}

	$scope.addTag = function() {
		Profile.addTag($scope.newTag).then(function(result) {
			$scope.profile.tags.push($scope.newTag);
			resetNewTag();
			$('#addTagModal').closeModal();
		},
		function() {
			console.log("ERROR");
		});		
	}

	$scope.addLink = function() {
		Profile.addUrl($scope.newLink).then(function(result) {
			$scope.profile.links.push($scope.newLink);
			resetNewLink();
			$('#addLinkModal').closeModal();
		},
		function() {
			console.log("ERROR");
		});	
	}

	$scope.showEditDescription = function() {
		$scope.newDescription = $scope.profile.description;
		$scope.modeEdit = !$scope.modeEdit;
	}

	$scope.changeDescription = function() {
		$scope.profile.description = $scope.newDescription;
		resetNewDescription();
		$scope.modeEdit = false;
	}	

	$scope.cancelEditDescription = function() {
		resetNewDescription();
		$scope.modeEdit = false;
	}		
})