import { Component, forwardRef, Provider, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseLengthComponent),
  multi: true
}

@Component({
  selector: 'app-course-length',
  templateUrl: './course-length.component.html',
  styleUrls: ['./course-length.component.scss'],
  providers: [VALUE_ACCESSOR]
})

export class CourseLengthComponent implements OnInit, ControlValueAccessor {

  private lengthValue: number;

  public lengthForm: FormGroup = new FormGroup({
    courseLength: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  })

  constructor() { }

  ngOnInit() {
  }

  private onChange = (value: any) => {};

  updateLength(val) {
    this.lengthValue = val;
    this.onChange(this.lengthValue);
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
  }

}
