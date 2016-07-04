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

//$window.location.reload()// $route.reload();  (have $route in controller)

//ADMIN CONTROLLER
app.controller('AdminController', function($scope, $http){
  $scope.addAZ = function () {
    $scope.newProduct = {
      name: $scope.azname,
      price: $scope.azprice,
      description: $scope.azdescription,
      img: $scope.azimg,
      qty: 1
    };


  $http({
    method: 'POST',
    url: 'http://localhost:3002/products',
    data: $scope.newProduct
  }).success(function addAZ(product){
    $scope.a2z.products.push(product);
    console.log(product);
    $scope.azname = '';
    $scope.azprice = '';
    $scope.azdescription = '';
    $scope.azimg = '';
    });
  };
  $scope.removeItem = function (index) {
      $http({
        method:'DELETE',
        url:'http://localhost:3002/products/' + (index+1)
      }).success(function(){
        $scope.a2z.products.splice((index), 1);
      });
    };

});


//CONSUMER CONTROLLER
app.controller('ConsumerController', function ($scope, $http){
//cartAZ adds product to cart
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
      $scope.removeCartItem = function (index) {
          $http({
            method:'DELETE',
            url:'http://localhost:3002/products/' + (index+1)
          }).success(function(){
            $scope.a2z.checkout.splice((index), 1);
          });
        };
    });
  };

  $scope.viewAZ = function (product){
    $http({
      method: 'GET',
      url: 'http://localhost:3002/products/' + product
    }).success(function(response){
      console.log(response);

      $http({
        method: 'POST',
        url: 'http://localhost:3002/details/',
        data: response
      }).success(function success(product){
        console.log(product);
      });
    });
  };
});




//
//     $scope.total = function() {
//         var total = 0;
//         angular.forEach($scope.invoice.items, function(item) { // .forEach is the same as .each in jQuery
//             total += item.qty * item.cost;
//         });
//
//         return total;
//     }
// });
// })();

// app.controller('ConsumerController', function ($scope){
//     $scope.count = 0;       // to keep track of add/removed items on receipt
//     // console.log(count);
// });

//
//   $scope.addItem = function() {
//       $scope.invoice.cart.push({ // add items to the array of items
//           qty: 1,   // will add 1 item at a time
//           description: '',
//           cost: 0
//       });
//   },
//
//   $scope.removeItem = function(index) {     // delete function
//       $scope.invoice.cart.splice(index, 1);  // .splice takes part of array
//   },
//
//   $scope.total = function() {
//     var total = 0;
//     angular.forEach($scope.invoice.cart, function(cart) { // .forEach is the same as .each in jQuery
//         total += cart.qty * cart.price;
//     });
//
//     return total;
//   };
// });
