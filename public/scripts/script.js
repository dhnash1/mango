console.log("LOL");
var myApp = angular.module('myApp', []);

myApp.controller('Controller', ['$scope', '$http', function($scope, $http) {

  console.log("ANGULAR");
  $scope.run = function(x){
    console.log($scope.inputTest);
    var box = {
      name : $scope.inputName,
      assign: $scope.assignName,
      score: $scope.score,
      date: $scope.date
    };
    console.log(box);
    $http({
         method: 'POST',
         url: "/router/post",
         data: box
     }).then(function(response) {
         console.log("response:", response);

         // $scope.searchResults = response.data.Search;
     });
  };

}]);
