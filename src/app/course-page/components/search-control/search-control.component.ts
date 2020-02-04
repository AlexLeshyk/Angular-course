import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {

  @Input() inputValue: string;
  @Output() onValueChanged = new EventEmitter<string>();
  form : FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      searchField: new FormControl('')
    });
  }

  onKeyUp(searchTextValue: string){
    this.inputValue = searchTextValue;
    this.onValueChanged.emit(searchTextValue);
  }

}
