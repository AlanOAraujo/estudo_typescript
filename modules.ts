
window.onload = () => {

    let strings = ['Alan', '02357002', '1234'];

    let validator: { [s: string]: Validator.StringValidator } = {}

    validator['Zip code'] = new Validator.CepValidator();
    validator['Letters only'] = new Validator.LettersOnlyValidator();

    let result: string = "";
    strings.forEach(s => {
        for (var name in validator) {
            result = result + '"' + s + '"' + (validator[name].isValidate(s)
                ? 'matches' : 'does not match') + name + "<br>"
        }
    })
    document.getElementById('content').innerHTML = result;
}