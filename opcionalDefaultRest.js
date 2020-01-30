window.onload = function () {
    //Function com o ultimo parametro Optional
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
    //Function com o ultimo parametro default
    function multiplyNumber(num1, num2, num3) {
        if (num3 === void 0) { num3 = 1; }
        var result = num1 * num2 * num3;
        return result;
    }
    console.log("Resultado das multiplicações " + multiplyNumber(2, 5, 2));
    //Function com parametro rest, que serve como um grupo sem limites, e não precisa colocar parametros adicionais
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    console.log("Resultado das multiplicações " + buildName("Alan", "Oliveira", "de", "Almeida", "Araujo", 9, "de", "Janeiro", 1990));
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
    //Arrow Function Step1
    var resultSumStep1 = function (x, y, z) {
        if (z === void 0) { z = 0; }
        var result = x + y + z;
        return result;
    };
    console.log("Resultado da Soma Arrow Step1 " + resultSumStep1(3, 6, 1));
    //Arrow Function Step2
    var resultSumStep2 = function (x, y, z) {
        if (z === void 0) { z = 0; }
        return x + y + z;
    };
    console.log("Resultado da Soma Arrow Step2 " + resultSumStep2(3, 10, 4));
};
