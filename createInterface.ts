interface LabelledValue {
    label: string;
    size?: number;
}

interface SearchConf {
    (source: string, subString: string): boolean;
}

interface StringArray {
    [index: number]: string;
}

window.onload = () => {
    function printLabel(labelObj: { label: string }) {
        console.log(labelObj.label)
    }

    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);

    function printLabelWithInterface(labelLedObj: LabelledValue) {
        console.log(labelLedObj.label)
    }

    var myObjLabel = { size: 10, label: "Size 10 Object Interface" };
    printLabelWithInterface(myObjLabel);

    var mySearch: SearchConf = (src: string, sub: string) => {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        } else {
            return true;
        }
    }

    console.log(mySearch("Alan Araujo", "Araujo"));

    var myArray: StringArray = ["Bob", "Apollo"];

    console.log(myArray[1]);

}