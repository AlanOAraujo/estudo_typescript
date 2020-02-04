var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
function loggingIdentity(args) {
    console.log(args.length);
    return args;
}
window.onload = function () {
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 4;
    myGenericNumber.add = function (x, y) { return x + y; };
    console.log(myGenericNumber.zeroValue + " " + myGenericNumber.add(3, 5));
    var myLog = loggingIdentity(["Hello", "Halo", "Gears"]);
    console.log(myLog[2]);
};
