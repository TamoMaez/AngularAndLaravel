angular.module('commentCtrl', [])

	.controller('commentController', function($scope, Comment, currentComment) {
		$scope.comment = currentComment;
	});