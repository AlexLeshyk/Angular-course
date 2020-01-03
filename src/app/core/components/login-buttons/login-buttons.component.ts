import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../../course-page/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss']
})
export class LoginButtonsComponent implements OnInit {

  @Output() open = new EventEmitter<void>();

  constructor(
    private auth: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.open.emit();
    this.router.navigate(['/login']);
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
    console.log('User logout');
  }

}
