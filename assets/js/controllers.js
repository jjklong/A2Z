// controllers.js

//MAIN CONTROLLER
app.controller('AzController', function($scope, $http){
  $http({
    method: 'GET',
    url: 'http://localhost:3002/db'
  }).success(function successCallback(response){
    // console.log(response);
    $scope.a2z = response;
  });
});


//ADMIN CONTROLLER
app.controller('AdminController', function($scope, $http){
  $scope.addAZ = function () {
    $scope.newProduct = {
      name: $scope.azname,
      price: $scope.azprice,
      description: $scope.azdescription,
      img: $scope.azimg
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
    $scope.azimg = '';
    });
  };
});



//CONSUMER CONTROLLER
app.controller('ConsumerController', function ($scope, $http){
    $scope.cartAZ = function (product) {
    //in cartAZ, the function picks up the product (which refers to the product.id in the HTML file. )
      $http({
        method: 'GET',
        url: 'http://localhost:3002/products/' + product
      }).success(function(response){
        console.log(response);    //logs object{item} that was clicked on ADD TO CART

      $http({
        method: 'POST',
        url: 'http://localhost:3002/checkout',
        data: response
      }).success(function success(product){
        console.log(product);     //logs object{ID} when ADD TO CART is clicked
      });
    });
  };
  });
