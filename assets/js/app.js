//app.js
var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl: 'pages/home.html',
      controller: 'AzController'
    })
    .when('/admin',{
      templateUrl: 'pages/adminView.html',
      controller: 'AzController'
    })
    .when('/consumer',{
      templateUrl: 'pages/consumerView.html',
      controller: 'AzController'
    })
    .when('/product',{
      templateUrl: 'pages/cProductView.html'
    })
    .when('/checkout',{
      templateUrl: 'pages/cReceiptView.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
