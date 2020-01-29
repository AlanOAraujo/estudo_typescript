
enum Color {A,D,G,T,R,E,U,O}

window.onload = () => {

    var myArray: Array<number>

    myArray = [9,3,4,5,6,7,4,3,2,1];

    myArray.forEach(element => {
        console.log(element);
    });

    var alfa: Color;

    alfa = Color.G;

    console.log(alfa);

};