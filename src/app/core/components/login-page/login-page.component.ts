import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from  '../../../course-page/services/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginValue: string = 'mail@yahoo.com';
  passwordValue: string = '111';
  isAuth: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthorizationService
  ) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginValue.trim() && this.passwordValue.trim()) {
      this.router.navigate(['/courses'], {
        queryParams : {
          auth: true
        }
      })
      this.auth.getUserInfo(this.loginValue);
      // this.isAuth = this.auth.getAutorizationValue();
      console.log("successfuly log in", this.auth.getAutorizationValue());
    }
  }

  onChange(event) {
    this.loginValue = event;
  }
}
