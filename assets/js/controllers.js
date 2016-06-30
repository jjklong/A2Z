// controllers.js
app.controller('AzController', function($scope, $http){
  $http({
    method: 'GET',
    url: 'http://localhost:3002/products'
  }).then(function successCallback(response){
    console.log(response);
    $scope.name = response;
  });
});
