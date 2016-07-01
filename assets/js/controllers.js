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
      $http.get('http://localhost:3002/products/' + product).success(function(response){
        console.log(response);
      $http({
        method: 'POST',
        url: 'http://localhost:3002/checkout'
      }).success(function success(product){
        console.log(product);
      });
    });
  };
  });

  // console.log($scope.a2z.products);
  // var cart = this;
  // console.log(this);
  // $scope.cart = [];
  // console.log(cart);
  //   $http({
  //     method: 'POST',
  //     url: 'http://localhost:3002/checkout'
  //   }).success(function cartAZ(index){
  //     cart.products = ind ex;
  //   });
