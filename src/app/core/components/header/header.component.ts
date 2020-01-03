import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UserEntity } from '../../models/user-entity.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() open = new EventEmitter<void>();
  @Input() isAuth = true;

  public content: string = 'content here';
  // public usersEntity: Array<UserEntity> = [
  //   {
  //     id: 1,
  //     first: 'Alex',
  //     last: 'Werby',
  //   },
  //   {
  //     id: 2,
  //     first: 'Aliaksandr',
  //     last: 'Jastine',
  //   }
  // ]

  constructor() {}

  ngOnInit() {
  }

}
