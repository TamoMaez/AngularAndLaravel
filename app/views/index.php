<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel and Angular Comment System</title>

	<!-- CSS -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"> <!-- load bootstrap via cdn -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
	<style>
		body 		{ 
			padding-top:80px; 
			background-color: #f5f5f5;
		}
		form 		{ padding-bottom:20px; }
		.comment 	{ padding-bottom:20px; }
		.well 		{ background-color: white; }
	</style>

	<!-- JS -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.10/angular.min.js"></script> <!-- load angular -->
	<script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.js"></script>
	
	<!-- ANGULAR -->
	<!-- all angular resources will be loaded from the /public folder -->
		<script src="js/controllers/mainCtrl.js"></script> <!-- load our controller -->
		<script src="js/controllers/commentCtrl.js"></script> <!-- load our controller -->
		<script src="js/services/commentService.js"></script> <!-- load our service -->
		<script src="js/app.js"></script> <!-- load our application -->

</head>
<!-- declare our angular app and controller -->
<body ng-app="commentApp">

<!-- Navigation -->
<navigation class="navbar navbar-inverse navbar-fixed-top" role='navigation' ng-controller="NavCtrl"></navigation>

<div class="container">
	<div class="row">
		<div ui-view="left" class="col-md-2"></div>

		<div ui-view="main" class="col-md-7"></div>

		<div ui-view="right" class="col-md-3"></div>
	</div>
</div>
</body>
</html>
