import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild, Input, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAuthor } from 'src/app/models/course.model';
import { selectValueValidator } from '../../../../services/validators';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true
  }]
})

export class AuthorsComponent implements OnInit, OnDestroy, ControlValueAccessor {
  visible = true;
  selectable = true;
  removable = true;
  disabled = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  authorCtrl: FormControl;
  authorsForm: FormGroup;
  filteredAuthors: Observable<string[]>;
  selectedAuthors: IAuthor[] = [];

  private destroy$ = new Subject();

  @Input() availableAuthors: IAuthor[];
  @Input() formControl = new FormControl();
  @ViewChild('authorsInput') authorsInput: ElementRef<HTMLInputElement>;
  @ViewChild('authors') matAutocomplete: MatAutocomplete;

  constructor(private fb: FormBuilder) { }

  writeValue(value: IAuthor[]): void {
    this.onChange(value);
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

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.selectedAuthors = value;
        this.updateValidation();
      });

    this.authorCtrl = new FormControl();

    this.authorsForm = this.fb.group({
      authors: [null, [selectValueValidator(this.selectedAuthors)]]
    });
  }

  public validate(): ValidationErrors | null {
    return selectValueValidator;
  }

  hasError(rule: string): boolean {
    return this.authorsForm.get('authors').hasError(rule);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    if (input) {
      input.value = '';
    }

    this.authorCtrl.setValue(null);
  }

  remove(author: IAuthor): void {
    this.selectedAuthors = this.selectedAuthors.filter(item => item.id !== author.id);
    this.writeValue(this.selectedAuthors);
    this.updateValidation();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedAuthors = [...this.selectedAuthors, event.option.value];
    this.authorsInput.nativeElement.value = '';
    this.authorCtrl.setValue(null);
    this.writeValue(this.selectedAuthors);
    this.updateValidation();
  }

  private updateValidation(): void {
    this.authorsForm.get('authors').setValidators(selectValueValidator(this.selectedAuthors));
    this.authorsForm.get('authors').updateValueAndValidity({emitEvent: false});
  }

  private onChange = (value: IAuthor[]) => {};
  private onTouched = () => {};

}
