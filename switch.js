window.onload = function () {
    var dayOfWeek;
    var textOut = "";
    dayOfWeek = 3;
    switch (dayOfWeek) {
        case 1:
            textOut = "Domingo";
            break;
        case 2:
            textOut = "Segunda";
            break;
        case 3:
            textOut = "Terça";
            break;
        case 4:
            textOut = "Quarta";
            break;
        case 5:
            textOut = "Quinta";
            break;
        case 6:
            textOut = "Sexta";
            break;
        case 7:
            textOut = "Sábado";
            break;
        default:
            textOut = "Fim do Mundo";
            break;  
    }
    console.log(textOut);
};
