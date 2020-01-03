import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from  '../../../course-page/services/authorization.service';
import { UserEntity } from '../../models/user-entity.model';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginValue: string = 'mail@yahoo.com';
  passwordValue: string = '111';
  isAuth: boolean = false;
  subscriptions: SubscriptionLike[] = [];

  constructor(
    private router: Router,
    private auth: AuthorizationService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

  onLogin() {
    if (this.loginValue.trim() && this.passwordValue.trim()) {
      const user: UserEntity = {
        login: this.loginValue,
        password: this.passwordValue
      }
      this.subscriptions.push(this.auth.login(user).subscribe(() => {
        if ( this.auth.getAutorizationValue()) {
          this.subscriptions.push(this.auth.getUserById(user.id).subscribe(() => {
            console.log('user FirstName:',user.first,'user LastName:',user.last,'user Login:', user.login);
          }));
        }
        this.router.navigate(['/courses'], {
          queryParams : {
            auth: true
          }
        });
      }));
    }
  }

  onChange(event) {
    this.loginValue = event;
  }
}
