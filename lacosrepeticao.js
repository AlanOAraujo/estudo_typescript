var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    return Fruits;
}());
window.onload = function () {
    var i;
    var textOut = "";
    var myArray = ["cat", "dog", 223, "fish", true, "bat"];
    // while (i < 10){
    //     textOut += "o numero é: " + i + "<br>";
    //     i++;
    // }
    // document.getElementById('content').innerHTML = textOut;
    // do{
    //     textOut += "o numero é: " + i + "<br>";
    //     i++;
    // } while (i < 10)
    // document.getElementById('content').innerHTML = textOut;
    // for (i = 0; i < 5; i++) {
    //     textOut += "o numero é: " + i + "<br>";
    // }
    for (i = 0; i < 5; i++) {
        textOut += myArray[i] + "<br>";
    }
    var maca = { name: "Apple", color: "Red", size: 5 };
    var text = "";
    for (var f in maca) {
        text += maca[f];
    }
    document.getElementById('content').innerHTML = text;
};
