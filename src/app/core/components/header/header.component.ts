import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from  '../../../shared/services/authorization.service';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { UserEntity } from '../../models/user-entity.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth = true;
  aSub: Subscription;
  user : UserEntity;
  currentId: number;

  public content: string = 'content here';

  constructor(
    private auth: AuthorizationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateId();
      }
    });
  }

  updateId(): void {
    this.currentId = this.auth.getCurrentId();
    if (this.currentId !== undefined) {
      this.auth.getUserById(this.currentId).subscribe( item => {
        this.user = item;
      })
    }
  }

  openPopup() {
  }

}
