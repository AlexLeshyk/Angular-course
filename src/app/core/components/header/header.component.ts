import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UserEntity } from '../../models/user-entity.model';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ AuthorizationService ]
})
export class HeaderComponent implements OnInit {

  @Output() open = new EventEmitter<void>();
  @Input() isAuth = true;

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
