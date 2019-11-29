import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../../course-page/services/authorization.service';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss']
})
export class LoginButtonsComponent implements OnInit {

  @Output() open = new EventEmitter<void>();

  constructor(
    private auth: AuthorizationService
  ) { }

  ngOnInit() {
  }

  clickLogin(): void {
    this.open.emit();
    this.auth.login();
  }

}
