import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appDateValidateDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AppDateValidateDirective,
    multi: true
  }]
})

export class AppDateValidateDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {
    const DATE_REGEXP = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    // /^[1-9]+[0-9]*$/

    return DATE_REGEXP.test(control.value) ? null : {
      dateValueInvalid: true
    };
  }
}

@Directive({
  selector: '[appNumberValidateDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AppNumberValidateDirective,
    multi: true
  }]
})

export class AppNumberValidateDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {
    const NUMBER_REGEXP = /^[1-9]+[0-9]*$/;

    return NUMBER_REGEXP.test(control.value) ? null : {
      numberValueInvalid: true
    };
  }
}
