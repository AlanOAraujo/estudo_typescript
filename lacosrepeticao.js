var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    return Fruits;
}());
window.onload = function () {
    var i = 1;
    var a = 10;
    var textWhile = "";
    var textDoWhile = "";
    var textFor = "";
    var textForArray = "";
    var textForIn = "";
    var myArray = ["cat", "dog", 223, "fish", true, "bat"];
    var maca = { name: "Apple", color: "Red", size: 5 };
    while (i < 10) {
        textWhile += " o numero While é: " + i;
        i++;
        console.log(textWhile);
    }
    do {
        textDoWhile += " o numero DoWhile é: " + a;
        a++;
        console.log(textDoWhile);
    } while (a < 10);
    for (var b = 0; b < 5; b++) {
        textFor += " o numero For é: " + b;
        console.log(textFor);
    }
    for (var c = 0; c < 5; c++) {
        textForArray += myArray[c];
    }
    console.log(textForArray);
    for (var f in maca) {
        textForIn += maca[f];
    }
    console.log(textForIn);
    var textBreak = "";
    for (var index = 0; index < 10; index++) {
        if (index == 3) {
            break;
        }
        else {
            textBreak += " O numero do Break é: " + index;
            console.log(textBreak);
        }
    }
    var textContinue = "";
    for (var k = 0; k < 10; k++) {
        if (k == 3) {
            console.log("Caiu no Continue");
            continue;
        }
        else {
            textContinue += " O numero do Continue é: " + k;
            console.log(textContinue);
        }
    }
};
