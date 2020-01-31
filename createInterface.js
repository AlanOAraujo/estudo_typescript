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
};
