window.onload = function () {
    var strings = ['Alan', '02357002', '1234'];
    var validator = {};
    validator['Zip code'] = new Validator.CepValidator();
    validator['Letters only'] = new Validator.LettersOnlyValidator();
    var result = "";
    strings.forEach(function (s) {
        for (var name in validator) {
            result = result + '"' + s + '"' + (validator[name].isValidate(s)
                ? 'matches' : 'does not match') + name + "<br>";
        }
    });
    document.getElementById('content').innerHTML = result;
};
