window.onload = function () {
    function apresentaMensagem(tx) {
        console.log("Mensagem é " + tx);
    }
    apresentaMensagem("Leke feio!!!");
    function soma(x, y) {
        var z = x + y;
        return z;
    }
    console.log("O Valor é " + soma(5, 8));
    function checkNumber(numero) {
        if (numero < 10) {
            return true;
        }
        else {
            return false;
        }
    }
    console.log("O Valor menor que 10? " + checkNumber(5));
    //Aqui é uma Function Type, uma variavel que obtem seu resultado por uma function
    var myAdd = function (a, b) {
        return a + b;
    };
    console.log("O Valor é " + myAdd(1, 2));
};
