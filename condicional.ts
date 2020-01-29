window.onload = () => {
    
    var number1: number = 15
    var number2: number = 15

    var text1 : string = "Apollo"
    var text2 : string = "apollo"

    if (number1 != number2) {
        console.log("number1 é diferente de number2 :")
    } else {
        console.log("number1 é igual ao number2 :")
    }

    if (number1 == number2) {
        console.log("Numeros iguais " + "Number1 é " + number1 + " Number2 é " + number2)
    } else {
        console.log("Numeros Diferentes "+"Number1 é " + number1 + " Number2 é " + number2 )
    }

    if(number1 > number2){
        console.log("Number1 é maior que Number2 " + number1, number2 )
    } else if(number1 < number2){
        console.log("Number2 é maior que Number1 " + number2, number1 )
    }

    if(text1 == text2){
        console.log("textos são iguais " + text1, text2)
    } else if(text1 != text2){
        console.log("textos Diferentes " + text1, text2)
    }

}