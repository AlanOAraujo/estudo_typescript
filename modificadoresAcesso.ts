class Product {

    private name: string;
    private preco: number;

    static seller: string

    constructor(name: string, preco: number) {
        this.name = name
        this.preco = preco
    }

    precoComDesconto(desconto: number = 0) {
        let precoFinal: number = this.preco - (this.preco * desconto)
        console.log(this.name + " : $" + precoFinal)
    }


    public get getName(): string {
        return this.name;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public get getPreco(): number {
        return this.preco;
    }

    public set setPreco(preco: number) {
        this.preco = preco;
    }

}

class Celular extends Product {

    private sistemaOp: string;

    constructor(name: string, preco: number, sistemaOp: string) {
        super(name, preco);
        this.sistemaOp = sistemaOp;
    }

    public precoComDesconto(desconto: number = 0) {
        super.precoComDesconto(desconto);
    }

}

class Pessoa {

    private name: string;
    private altura: number;

    constructor() {}

    public get getName(): string {
        return this.name;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public get getAltura(): number {
        return this.altura;
    }

    public set setAltura(altura: number) {
        this.altura = altura;
    }
}

window.onload = () => {

    new Celular("Google Pixel", 2000, "Android 10").precoComDesconto(0.2);

    let persona = new Pessoa();
    persona.setAltura = 1.75;
    persona.setName = "Alan";

    console.log("Nome: "+persona.getName+" Altura: "+persona.getAltura);
}