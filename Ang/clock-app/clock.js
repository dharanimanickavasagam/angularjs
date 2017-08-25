var module = angular.module("myApp", []);
module.controller("MainCtrl", Main);


function Main($scope) {
    $scope.date = Date();
    console.log("main called");
    $scope.update = function() {
        $scope.date = Date();
    }
}