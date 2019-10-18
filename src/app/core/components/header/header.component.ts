import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../user-entity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public usersEntity: Array<UserEntity> = [
    {
      id: 1,
      firstName: 'Alex',
      lastName: 'Werby',
    },
    {
      id: 2,
      firstName: 'Aliaksandr',
      lastName: 'Jastine',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
