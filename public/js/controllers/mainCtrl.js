angular.module('mainCtrl', [])

	.controller('mainController', function($scope, Comment) {
		// get all the comments first and bind it to the $scope.comments object
		$scope.comments = Comment.comments;
		
		// object to hold all the data for the new comment form
		$scope.commentData = {};

		// loading variable to show the spinning loading icon
		$scope.loading = true;

		$scope.$watchCollection('comments', function() {
			$scope.loading = false;
		});

		// function to handle submitting the form
		$scope.submitComment = function() {
			$scope.loading = true;

			// save the comment. pass in comment data from the form
			Comment.create($scope.commentData)
				.success(function() {
					$scope.commentData = {};
					$scope.loading = false;
				})
				.error(function(data) {
					console.log(data);
				});
		};

		// function to handle deleting a comment
		$scope.deleteComment = function(id) {
			$scope.loading = true; 

			Comment.destroy(id)
				.success(function(data) {

					// if successful, we'll need to refresh the comment list
					Comment.get()
						.success(function() {
							$scope.loading = false;
						});

				});
		};

	});