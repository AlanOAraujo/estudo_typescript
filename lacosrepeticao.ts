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

    var textBreak: string = ""
    for (let index = 0; index < 10; index++) {
        if(index == 3){
            break;
        }else {
            textBreak += " O numero do Break é: " + index;
            console.log(textBreak) 
        }
    }

    var textContinue: string = ""
    for (let k = 0; k < 10; k++) {
        if(k == 3){
            continue;
        }else {
            textContinue += " O numero do Continue é: " + k;
            console.log(textContinue) 
        }
        
    }
}