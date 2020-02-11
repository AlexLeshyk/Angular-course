import { Component, OnInit, OnDestroy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl, FormGroup, Validators } from '@angular/forms';
import { ENTER, COMMA, SPACE } from '@angular/cdk/keycodes';
import { Author } from '../../models/course-item.model';
import { ItemCourseService } from '../../services/item-course.service';
import { Subscription } from 'rxjs';

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
export class AuthorComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {

  constructor(
    private itemCourseService: ItemCourseService,
  ) { }


  ngOnInit() {
    this.author$ = this.itemCourseService.getAuthors().subscribe(authors => {
        this.authorsItems = authors;
    });
  }

  ngOnDestroy() {
    if (this.author$) {
      this.author$.unsubscribe();
    }
  }

  public authors: Author[];
  authorsItems: Author[] = [];
  author$: Subscription;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
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
