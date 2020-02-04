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

class Produto {

    name: string
    preco: number

    constructor(name: string, preco: number) {
        this.name = name
        this.preco = preco
    }

    precoComDesconto(desconto:number=0){
        let precoFinal: number = this.preco - (this.preco * desconto)
        console.log(this.name + " : $"+precoFinal)
    }

} 

class Tv extends Produto {

    size:number

    constructor(name:string, preco:number, size:number) {
        super(name, preco);
        this.size = size;
    }

    precoComDesconto(desconto:number){
        console.log("Tamanho da TV: "+this.size+" pol")
        super.precoComDesconto(desconto);
    }

}

window.onload = () => {

    var myHello = new Hello("World");

    console.log(myHello.message());

    var myAreas = new Areas();

    console.log("Tamanho do Circulo: " + myAreas.circle(5))

    console.log("Tamanho do Retangulo: " + myAreas.rectangle(8,9))

    console.log("Tamanho do Quadrado: " + myAreas.square(4))

    let myProduct = new Produto("Melancia", 10.00).precoComDesconto(0.02);

    let myTV = new Tv("Samsung",1499,43).precoComDesconto(0.12);

}