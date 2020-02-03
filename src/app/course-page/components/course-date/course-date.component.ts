import { Component, forwardRef, Provider, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseDateComponent),
  multi: true
}

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class CourseDateComponent implements ControlValueAccessor, OnInit {

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

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(state: any): void {
    this.dateValue = state;
  }
}
