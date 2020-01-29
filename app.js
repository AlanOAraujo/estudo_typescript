"use strict";
var Color;
(function (Color) {
    Color[Color["A"] = 0] = "A";
    Color[Color["D"] = 1] = "D";
    Color[Color["G"] = 2] = "G";
    Color[Color["T"] = 3] = "T";
    Color[Color["R"] = 4] = "R";
    Color[Color["E"] = 5] = "E";
    Color[Color["U"] = 6] = "U";
    Color[Color["O"] = 7] = "O";
})(Color || (Color = {}));
window.onload = () => {
    var myArray;
    myArray = [9, 3, 4, 5, 6, 7, 4, 3, 2,];
    myArray.forEach(element => {
        console.log(element);
    });
    var alfa;
    alfa = Color.G;
    console.log(alfa);
};
