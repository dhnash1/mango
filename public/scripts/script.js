console.log("LOL");
var myApp = angular.module('myApp', []);

myApp.controller('Controller', ['$scope', '$http', function($scope, $http) {
  $scope.find = function(x){
    $http({
         method: 'GET',
         url: "/router",
     }).then(function(response) {
         console.log("response GET:", response.data);

         $scope.thwunk = response.data;
     });
  };
  $scope.find();

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
         url: "/router",
         data: box
     }).then(function(response) {
         console.log("response:", response);
         $scope.find();

         // $scope.searchResults = response.data.Search;
     });
  };




}]);
