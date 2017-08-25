var app = angular.module("mymodule", []);
app.controller("myctrl1", myctrl);



function myctrl() {
    this.result;


    this.buttonclicked = function(button) {
        this.selectedoperation = button;
    }

    this.calculate = function() {
        var a = parseFloat(this.num1);
        var b = parseFloat(this.num2);

        if (this.selectedoperation == '+') {
            this.result = a + b;
        }

        if (this.selectedoperation == '-') {
            this.result = a - b;
        }

        if (this.selectedoperation == '*') {
            this.result = a * b;
        }

        if (this.selectedoperation == '/') {
            this.result = a / b;
        }
    }
}