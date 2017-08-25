var app = angular.module("mymodule", []);
app.controller("myctrl", myctrl);

function myctrl() {
    this.number;
    this.result = parseFloat(1);
    var i = parseFloat(0);

    this.compute = function() {

        var max = parseFloat(this.number);

        for (i = 1; i <= max; i++) {

            this.result = this.result * i;

            console.log(this.result);
        }
    }


}