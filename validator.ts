module Validator {

    export interface StringValidator {
        isValidate(s: string): boolean;
    }

    var charsRegexp = /^[A-Za-z]+$/;
    var cepRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isValidate(s: string): boolean {
            return charsRegexp.test(s);
        }
    }

    export class CepValidator implements StringValidator {
        isValidate(s: string): boolean {
            return s.length === 8 && cepRegexp.test(s);
        }
    }
}
