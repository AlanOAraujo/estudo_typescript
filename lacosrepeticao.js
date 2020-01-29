window.onload = function () {
    var i = 10;
    var textOut = "";
    // while (i < 10){
    //     textOut += "o numero é: " + i + "<br>";
    //     i++;
    // }
    // document.getElementById('content').innerHTML = textOut;
    do {
        textOut += "o numero é: " + i + "<br>";
        i++;
    } while (i < 10);
    document.getElementById('content').innerHTML = textOut;
};
