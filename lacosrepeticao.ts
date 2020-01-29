class Fruits {
    name: string;
    color: string;
    size: number;
}

window.onload = () => {
    var i: number = 1;
    var a: number = 10;
    var textWhile: string = ""; 
    var textDoWhile: string = "";
    var textFor: string = "";
    var textForArray: string = "";
    var textForIn: string = "";
    var myArray: Array<any> = ["cat", "dog", 223, "fish", true, "bat"];
    var maca: Fruits = {name: "Apple", color: "Red", size: 5};

    while (i < 10){
        textWhile += " o numero While é: " + i;
        i++;
        console.log(textWhile);
    }

    do{
        textDoWhile += " o numero DoWhile é: " + a ;
        a++;
        console.log(textDoWhile);
    } while (a < 10)
            
    for (let b: number = 0; b< 5; b++) {
        textFor += " o numero For é: " + b;
        console.log(textFor);
    }

    for (let c: number = 0; c < 5; c++) {
        textForArray += myArray[c];
    }
    
    console.log(textForArray);

    for (const f in maca) {
        textForIn += maca[f];
    }
    console.log(textForIn);
}