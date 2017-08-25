var module = angular.module("twowaymodule", []);
module.controller("myctrl", twowayctrl);

function twowayctrl($scope) {
    console.log("I am called now");
    $scope.username = "";
}