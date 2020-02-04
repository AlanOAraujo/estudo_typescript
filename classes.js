var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Produto = /** @class */ (function () {
    function Produto(name, preco) {
        this.name = name;
        this.preco = preco;
    }
    Produto.prototype.precoComDesconto = function (desconto) {
        if (desconto === void 0) { desconto = 0; }
        var precoFinal = this.preco - (this.preco * desconto);
        console.log(this.name + " : $" + precoFinal);
    };
    return Produto;
}());
var Tv = /** @class */ (function (_super) {
    __extends(Tv, _super);
    function Tv(name, preco, size) {
        var _this = _super.call(this, name, preco) || this;
        _this.size = size;
        return _this;
    }
    Tv.prototype.precoComDesconto = function (desconto) {
        console.log("Tamanho da TV: " + this.size + " pol");
        _super.prototype.precoComDesconto.call(this, desconto);
    };
    return Tv;
}(Produto));
window.onload = function () {
    var myHello = new Hello("World");
    console.log(myHello.message());
    var myAreas = new Areas();
    console.log("Tamanho do Circulo: " + myAreas.circle(5));
    console.log("Tamanho do Retangulo: " + myAreas.rectangle(8, 9));
    console.log("Tamanho do Quadrado: " + myAreas.square(4));
    var myProduct = new Produto("Melancia", 10.00).precoComDesconto(0.02);
    var myTV = new Tv("Samsung", 1499, 43).precoComDesconto(0.12);
};
