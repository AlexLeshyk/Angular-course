import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {

  public inputValue = 'text to search';

  constructor() { }

  ngOnInit() {
  }

  public onClick(): void {
    console.log('значение из Input - ', this.inputValue);
  }

}
