angular.module('commentService', [])

	.factory('Comment', function($http) {
	
		var o = {
			comments: []
		};
		
		o.show = function(id) {
			return $http.get('api/comments/' + id).then(function(res){
			console.log(res)
				return res.data;
			});
		}
		
		o.get = function() {
			return $http.get('api/comments').success(function(data){
			  angular.copy(data, o.comments);
			});
		};
		
		o.create = function(post) {
			return $http.post('api/comments', $.param(post), {
				headers: { 'Content-Type' : 'application/x-www-form-urlencoded' }
			}).success(function(){
				o.get();
			})
		}
		
		o.destroy = function(id) {
			return $http.delete('api/comments/' + id).success(function(){
				o.get();
			});
		}
		
		return o;
	});