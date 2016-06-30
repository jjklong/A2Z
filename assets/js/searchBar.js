// app.directive('myOnKeyDownCall', function () {
//     return function (scope, element, attrs) {
//         element.bind("keydown keypress", function (event) {
//                 scope.$apply(function (){
//                     scope.$eval(attrs.ngEnter);
//                 });
//                 event.preventDefault();
//         });
//     };
// });
//
//
// $scope.callRestService= function() {
//   $http({method: 'GET', url: '/consumer'}).
//     success(function(data, status, headers, config) {
//          $scope.results.push(data);  //retrieve results and add to existing results
//     })
// }


// Directive
app.directive('search', function () {
    return function ($scope, element) {
        element.bind("keyup", function (event) {
          var val = element.val();
          if(val.length > 2) {
            $scope.search(val);
          }
        });
    };
});

// In Controller
$scope.search= function(val) {
  // fetch data
}


// http://stackoverflow.com/questions/21891229/search-box-in-angular-js
