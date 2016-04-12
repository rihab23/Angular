angular.module('NetworkWebApp', [
  'NetworkWebApp.services',
  'NetworkWebApp.controllers',
  'ngRoute'
  ])
.config(function ($routeProvider, $httpProvider) {
    // Pages
    $routeProvider.when("/home", {templateUrl: "partials/index.html", controller: "HomeCtrl"});
    $routeProvider.when("/activity", {templateUrl: "partials/activity.html", controller: "ActivityCtrl"});
    $routeProvider.when("/challenges", {templateUrl: "partials/challenges.html", controller: "ChallengesCtrl"});
    $routeProvider.when("/myportfolio", {templateUrl: "partials/myportfolio.html", controller:"MyportfolioCtrl"});
    $routeProvider.when("/addwork", {templateUrl: "partials/addwork.html", controller: "AddworkCtrl"});
    $routeProvider.when("/portfolio", {templateUrl: "partials/portfolio.html", controller: "PortfolioCtrl"});
    $routeProvider.when("/discover", {templateUrl: "partials/discover.html", controller: "DiscoverCtrl"});
    // discover
    $routeProvider.when("/discover/people", {templateUrl: "partials/people.html", controller: "PeopleCtrl"});
    $routeProvider.when("/discover/gallerie", {templateUrl: "partials/gallery.html", controller:"InstagramCtrl"});
    $routeProvider.when("/discover/explore", {templateUrl: "partials/search.html", controller: "SearchCtrl"});
  
  $routeProvider.otherwise({redirectTo: '/home'});
});

