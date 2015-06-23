var commentApp = angular.module('commentApp', ['mainCtrl', 'commentCtrl', 'commentService', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, Comment){
	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			"left": { 
				templateUrl: "partials/left-sidebar.html",
				controller: "mainController"
			},
			"main": { 
				templateUrl: 'partials/home.html',
				controller: "mainController"
			},
			"right": { 
				templateUrl: "partials/right-sidebar.html",
				controller: "mainController"
			}
		},
		resolve: {
			postPromise: function(Comment){		
				return Comment.get();
			}
		}
	})
	.state('comment', {
		url: '/comments/{id}',
		views: {
			"left": { 
				templateUrl: "partials/left-sidebar.html",
				controller: "mainController"
			},
			"main": { 
				templateUrl: 'partials/comment.html',
				controller: "commentController"
			},
			"right": { 
				templateUrl: "partials/right-sidebar.html",
				controller: "mainController"
			}
		},
		resolve: {
		  currentComment : function($stateParams, Comment){
			  return Comment.show($stateParams.id);
			},
		  postPromise: function(Comment){		
				return Comment.get();
			}
		}
	})

	
	$urlRouterProvider.otherwise('home');
}])

.controller('NavCtrl', ['$scope', function($scope){
  
}])

.directive('navigation', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'partials/navigation.html'
    };
})