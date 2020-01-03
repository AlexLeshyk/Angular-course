import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() open = new EventEmitter<void>();
  @Input() isAuth = true;

  public content: string = 'content here';

  constructor() {}

  ngOnInit() {
  }

}
