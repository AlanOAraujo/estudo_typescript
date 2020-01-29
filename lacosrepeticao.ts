class Fruits {
    name: string;
    color: string;
    size: number;
}

window.onload = () => {
    var i: number;
    var textOut: string = "";
    var myArray: Array<any> = ["cat", "dog", 223, "fish", true, "bat"];

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
        textOut += myArray[i]+"<br>";
    }

    var maca: Fruits = {name: "Apple", color: "Red", size: 5};
    var text: string = "";

    for (const f in maca) {
        text += maca[f];
    }

    document.getElementById('content').innerHTML = text;
}