window.onload = () => {
    function addNumbers(num1:number, num2:number, num3?:number): number {
        var resultado: number;

        if (isNaN(num3)) {
            resultado = num1 + num2;
        } else {
            resultado = num1 + num2 + num3;
        }

        return resultado;
    }

    var resultAdd: number = addNumbers(3,5,7);

    console.log("Resultado das somas " + resultAdd);

    function multiplyNumber(num1:number, num2:number, num3 = 1 ): number {
        var result: number = num1 * num2 * num3;
        return result;
    }
    console.log("Resultado das multiplicações " + multiplyNumber(2,5,2));
    
    function buildName(firstName:string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }
    console.log("Resultado das multiplicações " + buildName("Alan", "Oliveira", "de", "Almeida", "Araujo"));


    //Sobrecarga na Function
    function calculaArea(x:number): number ;
    function calculaArea(x:number, y:number): number ;
    function calculaArea(x:number, y?:number): any {
        var result: number

        if(y > 0){
            result = x*y;
        } else {
            result =x*x;
        }

        return result;
    }
    
    console.log(calculaArea(3, 6))

   

}