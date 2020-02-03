var Hello = /** @class */ (function () {
    function Hello(textIn) {
        this.helloText = textIn;
    }
    Hello.prototype.message = function () {
        return "hello" + this.helloText;
    };
    return Hello;
}());
var Areas = /** @class */ (function () {
    function Areas() {
        this.pi = 3.14;
    }
    Areas.prototype.circle = function (radius) {
        return this.pi * radius * radius;
    };
    Areas.prototype.rectangle = function (height, width) {
        return height * width;
    };
    Areas.prototype.square = function (side) {
        return side * side;
    };
    return Areas;
}());
window.onload = function () {
    var myHello = new Hello("World");
    console.log(myHello.message());
    var myAreas = new Areas();
    console.log("Tamanho do Circulo: " + myAreas.circle(5));
    console.log("Tamanho do Retangulo: " + myAreas.rectangle(8, 9));
    console.log("Tamanho do Quadrado: " + myAreas.square(4));
};
