import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {

  @Input() inputValue: string;
  @Output() onValueChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onKeyUp(searchTextValue: string){
    this.inputValue = searchTextValue;
    this.onValueChanged.emit(searchTextValue);
  }

}
