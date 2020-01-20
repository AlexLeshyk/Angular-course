import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {

  @Input() inputValue: string;
  @Output() onValueChanged = new EventEmitter<string>();
  @Output() onSearchClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  public onClick(): void {
    // console.log('значение из Input - ', this.inputValue);
    this.onSearchClick.emit();
  }

  onChange(event){
    this.inputValue = event;
    this.onValueChanged.emit(event);
  }

}
