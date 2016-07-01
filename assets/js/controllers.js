// controllers.js
app.controller('AzController', function($scope, $http){
  $http({
    method: 'GET',
    url: 'http://localhost:3002/db'
  }).success(function successCallback(response){
    console.log(response);
    $scope.a2z = response;
  });
});



app.controller('AdminController', function($scope, $http){
  $scope.addAZ = function () {
    $scope.newProduct = {
      name: $scope.azname,
      price: $scope.azprice,
      description: $scope.azdescription
    };


  $http({
    method: 'POST',
    url: 'http://localhost:3002/products',
    data: $scope.newProduct
  }).success(function addAZ(product){
    console.log(product);
    $scope.azname = '';
    $scope.azprice = '';
    $scope.azdescription = '';
    });
  };
});
