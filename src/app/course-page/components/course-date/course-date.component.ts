import { Component, forwardRef, Provider, Input, OnInit } from '@angular/core';
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

  dateValue = Date();

  @Input('groupDate')
  public dateForm: FormGroup;

  private onChange = (value: any) => {};
  onTouched: any = () => {};

  ngOnInit() {
    this.dateForm = new FormGroup({
      courseDate: new FormControl('', [Validators.required])
    })
  }

  updateDate(event) {
    this.dateValue = event;
    this.onChange(event);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(state: any): void {
    this.dateValue = state;
  }
}
