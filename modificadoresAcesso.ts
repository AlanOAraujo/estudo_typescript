class Product {

    name: string
    preco: number

    static seller: string

    constructor(name: string, preco: number) {
        this.name = name
        this.preco = preco
    }

    precoComDesconto(desconto:number=0){
        let precoFinal: number = this.preco - (this.preco * desconto)
        console.log(this.name + " : $"+precoFinal)
    }

} 

class Celular extends Product {

    private sistemaOp: string;

    constructor(name:string, preco:number, sistemaOp:string) {
        super(name, preco);
        this.sistemaOp = sistemaOp;
    }

    public precoComDesconto(desconto:number=0){
        super.precoComDesconto(desconto);
    }

}

window.onload = () => {

    new Celular("Google Pixel", 2000, "Android 10").precoComDesconto(0.2);
     
    let mySeller:string = Product.seller = "eee";

    console.log(mySeller);

}