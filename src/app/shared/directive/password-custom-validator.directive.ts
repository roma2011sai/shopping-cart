import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordCustomValidator(numberAlphabet: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = !numberAlphabet.test(control.value);
    return forbidden ? {'wrongPassword': {value: control.value}} : null;
  };
}
