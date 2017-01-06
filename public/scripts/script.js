console.log("LOL");
var myApp = angular.module('myApp', []);

myApp.controller('Controller', ['$scope', '$http', function($scope, $http) {

  console.log("ANGULAR");
  $scope.run = function(x){
    console.log($scope.inputTest);
    var box = {thing : $scope.inputTest};
    console.log(box);
    $http({
         method: 'POST',
         url: "/post",
         data: box
     }).then(function(response) {
         console.log("response:", response.data.thingy);

         // $scope.searchResults = response.data.Search;
     });
  };

}]);
