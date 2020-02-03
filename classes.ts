class Hello {

    helloText: string;

    constructor(textIn: string) {
        this.helloText = textIn;
    }

    message(): string{
        return "hello" + this.helloText;
    }

}

class Areas{
    pi: number;

    constructor() {
        this.pi = 3.14;
    }

    circle(radius:number): number{
        return this.pi * radius * radius;
    }

    rectangle(height:number, width:number):number{
        return height * width;
    }

    square(side:number):number{
        return side * side;
    }

}

window.onload = () => {

    var myHello = new Hello("World");

    console.log(myHello.message());

    var myAreas = new Areas();

    console.log("Tamanho do Circulo: " + myAreas.circle(5))

    console.log("Tamanho do Retangulo: " + myAreas.rectangle(8,9))

    console.log("Tamanho do Quadrado: " + myAreas.square(4))

}