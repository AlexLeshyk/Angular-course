import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../models/user-entity.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public content: string = 'content here';
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
