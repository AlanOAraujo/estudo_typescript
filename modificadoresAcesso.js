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
var Product = /** @class */ (function () {
    function Product(name, preco) {
        this.name = name;
        this.preco = preco;
    }
    Product.prototype.precoComDesconto = function (desconto) {
        if (desconto === void 0) { desconto = 0; }
        var precoFinal = this.preco - (this.preco * desconto);
        console.log(this.name + " : $" + precoFinal);
    };
    return Product;
}());
var Celular = /** @class */ (function (_super) {
    __extends(Celular, _super);
    function Celular(name, preco, sistemaOp) {
        var _this = _super.call(this, name, preco) || this;
        _this.sistemaOp = sistemaOp;
        return _this;
    }
    Celular.prototype.precoComDesconto = function (desconto) {
        if (desconto === void 0) { desconto = 0; }
        _super.prototype.precoComDesconto.call(this, desconto);
    };
    return Celular;
}(Product));
window.onload = function () {
    new Celular("Google Pixel", 2000, "Android 10").precoComDesconto(0.2);
    var mySeller = Product.seller = "eee";
    console.log(mySeller);
};
