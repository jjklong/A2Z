//app.js
var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl: 'pages/home.html',
      controller: 'AzController'
    })
    .when('/admin',{
      templateUrl: 'pages/adminView.html'
    })
    .when('/consumer',{
      templateUrl: 'pages/consumerView.html',
      controller: 'ConsumerController'
    })
    .when('/product/',{
      templateUrl: 'pages/cProductView.html'
    })
    .when('/checkout',{
      templateUrl: 'pages/cReceiptView.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
