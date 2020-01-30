window.onload = function () {
    function addNumbers(num1, num2, num3) {
        var resultado;
        if (isNaN(num3)) {
            resultado = num1 + num2;
        }
        else {
            resultado = num1 + num2 + num3;
        }
        return resultado;
    }
    var resultAdd = addNumbers(3, 5, 7);
    console.log("Resultado das somas " + resultAdd);
    function multiplyNumber(num1, num2, num3) {
        if (num3 === void 0) { num3 = 1; }
        var result = num1 * num2 * num3;
        return result;
    }
    console.log("Resultado das multiplicações " + multiplyNumber(2, 5, 2));
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    console.log("Resultado das multiplicações " + buildName("Alan", "Oliveira", "de", "Almeida", "Araujo"));
    function calculaArea(x, y) {
        var result;
        if (y > 0) {
            result = x * y;
        }
        else {
            result = x * x;
        }
        return result;
    }
    console.log(calculaArea(3, 6));
};
