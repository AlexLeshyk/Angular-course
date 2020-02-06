import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators, NG_VALIDATORS, Validator } from '@angular/forms';

export interface IValidationState {
  invalid: boolean;
}

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true
    }
  ]
})
export class CourseDateComponent implements ControlValueAccessor, OnInit, Validator {

  private dateValue;

  public dateForm: FormGroup = new FormGroup({
    courseDate: new FormControl(this.dateValue, [Validators.required])
  })

  private onChange = (value: any) => {};

  ngOnInit() {
  }

  updateDate(val) {
    this.dateValue = new Date(val);
    this.onChange(this.dateValue);
  }

  validate({ value }: FormControl): IValidationState {
    const isNotValid = !(this.dateValue);

    return (
      isNotValid && {
        invalid: true
      }
    );
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(state: any): void {
    this.dateValue = state;
    this.dateForm.patchValue({courseDate: this.dateValue });
  }
}
