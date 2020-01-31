var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
window.onload = function () {
    function printLabel(labelObj) {
        console.log(labelObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    function printLabelWithInterface(labelLedObj) {
        console.log(labelLedObj.label);
    }
    var myObjLabel = { size: 10, label: "Size 10 Object Interface" };
    printLabelWithInterface(myObjLabel);
    var mySearch = function (src, sub) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    console.log(mySearch("Alan Araujo", "Araujo"));
    var myArray = ["Bob", "Apollo"];
    console.log(myArray[1]);
    var square = {};
    square.color = "blue";
    square.penWidth = 5.0;
    square.sideLenght = 10;
    console.log(square.color + " " + square.penWidth + " " + square.sideLenght);
};
