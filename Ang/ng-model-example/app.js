var app = angular.module("mymodule", []);
app.controller("myctrl", Main);


function Main($scope) {

    $scope.change = function() {

        console.log("Text input is now changed ")
    }

}