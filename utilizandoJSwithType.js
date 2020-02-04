var Module1;
(function (Module1) {
    var Calculator;
    (function (Calculator) {
        var CalcAreas = /** @class */ (function () {
            function CalcAreas() {
            }
            CalcAreas.prototype.getArea = function (radius) {
                var area = calcCirculo(radius);
                console.log("Area " + area);
                return area;
            };
            return CalcAreas;
        }());
        Calculator.CalcAreas = CalcAreas;
    })(Calculator = Module1.Calculator || (Module1.Calculator = {}));
})(Module1 || (Module1 = {}));
window.onload = function () {
};
