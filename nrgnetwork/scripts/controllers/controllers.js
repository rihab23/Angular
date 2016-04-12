var app = angular.module('NetworkWebApp.controllers', []);


/**
 * Controls all other Pages
 */
app.controller('HomeCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
  	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};
			$(".be-drop-down").on("click" ,function(){
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function(){
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
			return false;
	});


});
/**
 * Controls the Activity
 */
app.controller('ActivityCtrl', function (/* $scope, $location, $http */) {
  console.log("Activity Controller reporting for duty.");
    	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};
			$(".be-drop-down").on("click" ,function(){
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function(){
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
			return false;
	});

});

/**
 * Controls the Discover
 */
app.controller('DiscoverCtrl', function (/* $scope, $location, $http */) {
  console.log("Discover Controller reporting for duty.");
  	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};
			$(".be-drop-down").on("click" ,function(){
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function(){
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
			return false;
	});

});
/**
 * Controls the Challenges
 */
app.controller('ChallengesCtrl', function (/* $scope, $location, $http */) {
  console.log("Challenges Controller reporting for duty.");
  	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};
			$(".be-drop-down").on("click" ,function(){
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function(){
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
			return false;
	});

});
/**
 * Controls the Myportfolio
 */
app.controller('MyportfolioCtrl', function (/* $scope, $location, $http */) {
  console.log("Myportfolio Controller reporting for duty.");
  	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};
			$(".be-drop-down").on("click" ,function(){
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function(){
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
			return false;
	});

});
/**
 * Controls the Addwork
 */
app.controller('AddworkCtrl', function (/* $scope, $location, $http */) {
  console.log("Addwork Controller reporting for duty.");
  	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};
			$(".be-drop-down").on("click" ,function(){
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function(){
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
			return false;
	});

});
/**
 * Controls the Portfolio
 */
app.controller('PortfolioCtrl', function (/* $scope, $location, $http */) {
  console.log("Portfolio Controller reporting for duty.");
  	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};
			$(".be-drop-down").on("click" ,function(){
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function(){
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
			return false;
	});

});
/**
 * Controls the People
 */
app.controller('PeopleCtrl', function (/* $scope, $location, $http */) {
  console.log("People Controller reporting for duty.");
  	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};

});
/**
 * Controls the Gallerie
 */
app.controller('GallerieCtrl', function (/* $scope, $location, $http */) {
  console.log("Gallerie Controller reporting for duty.");
  

});
/**
 * Controls the Search
 */
app.controller('SearchCtrl', function (/* $scope, $location, $http */) {
  console.log("Search Controller reporting for duty.");
  	//MIX UP
	if($('#container-mix').length) {
		$('#container-mix').mixItUp(
			{
				animation: {
					duration: 400,
					effects: 'fade translateZ(-360px) stagger(34ms)',
					easing: 'ease'
				}
			}
		);};
			$(".be-drop-down").on("click" ,function(){
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function(){
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
			return false;
	});

});
/**
 * Controls the Instagram
 */
app.controller('InstagramCtrl', function($scope, InstagramFactory) {



    loadPhotosFromInsta();
    function loadPhotosFromInsta(){
        InstagramFactory.photos().success(function (response) {
            //console.log(response);
            $scope.photos = response;
        });
    }
});


      									
      	