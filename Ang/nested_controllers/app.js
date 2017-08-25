var app = angular.module("mymodule", []);
app.controller("mycontroller1", main1);
app.controller("mycontroller2", main2);

function main1($scope) {
    $scope.test = "from ctrl1";
}

function main2($scope) {
    // $scope.test = "from ctrl2";
}