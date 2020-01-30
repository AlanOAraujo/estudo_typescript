window.onload = () => {

    //Function com o ultimo parametro Optional
    function addNumbers(num1: number, num2: number, num3?: number): number {
        var resultado: number;

        if (isNaN(num3)) {
            resultado = num1 + num2;
        } else {
            resultado = num1 + num2 + num3;
        }

        return resultado;
    }

    var resultAdd: number = addNumbers(3, 5, 7);

    console.log("Resultado das somas " + resultAdd);

    //Function com o ultimo parametro default
    function multiplyNumber(num1: number, num2: number, num3 = 1): number {
        var result: number = num1 * num2 * num3;
        return result;
    }
    console.log("Resultado das multiplicações " + multiplyNumber(2, 5, 2));

    //Function com parametro rest, que serve como um grupo sem limites, e não precisa colocar parametros adicionais
    function buildName(firstName: string, ...restOfName: any[]) {
        return firstName + " " + restOfName.join(" ");
    }
    console.log("Resultado das multiplicações " + buildName("Alan", "Oliveira", "de", "Almeida", "Araujo", 9, "de", "Janeiro", 1990));


    //Function em sobrecarga
    function calculaArea(x: number): number;
    function calculaArea(x: number, y: number): number;
    function calculaArea(x: number, y?: number): any {
        var result: number

        if (y > 0) {
            result = x * y;
        } else {
            result = x * x;
        }

        return result;
    }

    console.log(calculaArea(3, 6))

    //Arrow Function Step1
    var resultSumStep1: any = (x: number, y: number, z: number = 0) => {
        var result = x + y + z;
        return result;
    }

    console.log("Resultado da Soma Arrow Step1 " + resultSumStep1(3, 6, 1))

    //Arrow Function Step2
    var resultSumStep2: any = (x: number, y: number, z: number = 0) =>  x + y + z;
    
    console.log("Resultado da Soma Arrow Step2 " + resultSumStep2(3, 10, 4))

}