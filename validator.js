var Validator;
(function (Validator) {
    var charsRegexp = /^[A-Za-z]+$/;
    var cepRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isValidate = function (s) {
            return charsRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validator.LettersOnlyValidator = LettersOnlyValidator;
    var CepValidator = /** @class */ (function () {
        function CepValidator() {
        }
        CepValidator.prototype.isValidate = function (s) {
            return s.length === 8 && cepRegexp.test(s);
        };
        return CepValidator;
    }());
    Validator.CepValidator = CepValidator;
})(Validator || (Validator = {}));
