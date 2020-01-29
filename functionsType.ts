window.onload = () => {

    function apresentaMensagem(tx:string) {
        console.log("Mensagem é " + tx)
    }

    apresentaMensagem("Leke feio!!!")

    function soma(x:number, y:number): number {
        
        const z: number = x + y;

        return z;
    }

    console.log("O Valor é "+soma(5,8));

    function checkNumber(numero:number): boolean {
        
        if (numero < 10) {
            return true    
        }else {
            return false
        }
        
    }

    console.log("O Valor menor que 10? " + checkNumber(5));

    //Aqui é uma Function Type, uma variavel que obtem seu resultado por uma function
    var myAdd: (valorBase:number, incrementa:number) => number =
        function(a:number, b:number):number {
            return a+b;
        }

    console.log("O Valor é " + myAdd(1,2));
}