import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-duration-custom-input',
  templateUrl: './duration-custom-input.component.html',
  styleUrls: ['./duration-custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationCustomInputComponent),
    multi: true,
  }]
})
export class DurationCustomInputComponent implements ControlValueAccessor {
  public duration: string;
  public disabled = false;
  private onChange = (value: string) => {};
  private onTouched = () => {};

  constructor() { }

  writeValue(value: string): void {
    this.duration = value;
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
    this.duration = value;
    this.onChange(value);
    this.onTouched();
  }
}
