import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators, NG_VALIDATORS, Validator } from '@angular/forms';
import { validateDigits } from '../../../shared/directives/number-validator.directive';

export interface IValidationState {
  invalid: boolean;
}

@Component({
  selector: 'app-course-length',
  templateUrl: './course-length.component.html',
  styleUrls: ['./course-length.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseLengthComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CourseLengthComponent),
      multi: true
    }
  ]
})

export class CourseLengthComponent implements OnInit, ControlValueAccessor, Validator {

  private lengthValue: number;

  public lengthForm: FormGroup = new FormGroup({
    courseLength: new FormControl(this.lengthValue, [Validators.required, validateDigits()])
  })

  constructor() { }

  ngOnInit() {
  }

  private onChange = (value: any) => {};

  updateLength(val) {
    this.lengthValue = val;
    this.onChange(this.lengthValue);
  }

  validate({ value }: FormControl): IValidationState {
    const isNotValid = !(this.lengthValue);

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

  writeValue(state: number): void {
    this.lengthValue = state;
    this.lengthForm.patchValue({courseLength: this.lengthValue });
  }

}
