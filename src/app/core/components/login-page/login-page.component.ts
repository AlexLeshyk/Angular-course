import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from  '../../../shared/services/authorization.service';
import { UserEntity } from '../../models/user-entity.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginValue: string = 'mail@yahoo.com';
  passwordValue: string = '111';
  isAuth: boolean;
  aSub: Subscription;

  constructor(
    private router: Router,
    private auth: AuthorizationService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onClose() {
    this.router.navigate(['/courses']);
  }

  onLogin() {
    if (this.loginValue.trim() && this.passwordValue.trim()) {
      const user: UserEntity = {
        login: this.loginValue,
        password: this.passwordValue
      }
      this.aSub = this.auth.login(user).subscribe(() => {
        if ( this.auth.getAutorizationValue()) {
          this.auth.getUserById(user.id).subscribe(() => {
            console.log('user FirstName:',user.first,'user LastName:',user.last,'user Login:', user.login);
          });
          this.auth.rememberId(user.id);
          this.router.navigate(['/courses'], {
            queryParams : {
              auth: true
            }
          });
        } else {
          this.router.navigate(['/courses'], {
            queryParams : {
              loginAgain: true
            }
          })
        }
      });
    }
  }

  onChange(event) {
    this.loginValue = event;
  }
}
