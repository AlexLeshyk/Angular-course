import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl, FormGroup, Validators } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Author } from '../../models/course-item.model';

export interface IValidationState {
  invalid: boolean;
}

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorComponent),
      multi: true
    }
  ]
})
export class AuthorComponent implements OnInit, ControlValueAccessor, Validator {

  constructor() { }

  ngOnInit() {
  }

  public authors: Author[];
  public authorForm: FormGroup = new FormGroup({
    authors: new FormControl(this.authors, [Validators.required])
  })

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public removable: boolean = true;

  public onChange = (authors: Author[]) => {};

  public onTouched = () => {};

  public get value(): Author[] {
    return this.authors;
  }

  validate({ value }: FormControl): IValidationState {
    const isNotValid = !(this.authors && this.authors.length);

    return (
      isNotValid && {
        invalid: true
      }
    );
  }

  registerOnChange(fn: (authors: Author[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(authors: Author[]): void {
    this.authors = authors;

    this.onChange(this.value);
  }

  add(event: any): void {
    const input = event.target;
    const value = event.target.value;

    if ((value || '').trim()) {
      this.authors.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }

    this.onChange(this.value);
  }

  remove(author: Author): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }

    this.onChange(this.value);
  }
}
