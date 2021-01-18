import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { VALIDATIONS } from '../../../../config/validation.config';

@Component({
  selector: 'app-date-custom-input',
  templateUrl: './date-custom-input.component.html',
  styleUrls: ['./date-custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateCustomInputComponent),
    multi: true,
  }]
})

export class DateCustomInputComponent implements ControlValueAccessor {
  public date: string;
  public disabled = false;
  public VALIDATIONS = VALIDATIONS;
  private onChange = (value: string) => {};
  private onTouched = () => {};

  constructor() { }

  writeValue(value: string): void {
    this.date = value;
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(value: string): void {
    this.date = value;
    this.onChange(value);
    this.onTouched();
  }

}
