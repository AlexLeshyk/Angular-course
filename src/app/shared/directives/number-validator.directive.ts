import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

export function validateDigits(): ValidatorFn {
  let matcher: RegExp = /^[0-9]*$/;

  return (control: AbstractControl) =>
    matcher.test(control.value)
      ? null
      : {
          validateDigits: {
            valid: false
          }
        };
}

@Directive({
  selector: '[appNumberValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberValidatorDirective, multi: true }]
})
export class NumberValidatorDirective implements Validator {
  public validate: ValidatorFn;

  constructor() {
    this.validate = validateDigits();
  }
}
