import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from  '../../../course-page/services/authorization.service';
import { UserEntity } from '../../models/user-entity.model';

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
      const user: UserEntity = {
        login: this.loginValue,
        password: this.passwordValue
      }
      this.auth.login(user).subscribe(() => {
        this.auth.getUserInfo(this.loginValue);
        // this.isAuth = this.auth.getAutorizationValue();
        console.log("successfuly log in");
        this.router.navigate(['/courses'], {
          queryParams : {
            auth: true
          }
        })
      });
    }
  }

  onChange(event) {
    this.loginValue = event;
  }
}
