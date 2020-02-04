declare function calcCirculo(radius);

module Module1.Calculator{
    export class CalcAreas {
        getArea(radius){
            let area = calcCirculo(radius);
            console.log("Area "+area);
            return area;
        }
    }
}

window.onload = () => {

}