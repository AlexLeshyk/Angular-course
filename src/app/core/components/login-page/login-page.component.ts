import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from  '../../../shared/services/authorization.service';
import { UserEntity } from '../../models/user-entity.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  // loginValue: string = 'Morales';
  // passwordValue: string = 'id';
  isAuth: boolean;
  authentication$: Subscription;
  form : FormGroup;

  constructor(
    private router: Router,
    private auth: AuthorizationService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnDestroy() {
    if (this.authentication$) {
      this.authentication$.unsubscribe();
    }
  }

  onClose() {
    this.router.navigate(['/courses']);
  }

  submit() {
    if (this.form.value.login.trim() && this.form.value.password.trim()) {
      const user: UserEntity = {
        login: this.form.value.login,
        password: this.form.value.password
      }
      this.authentication$ = this.auth.login(user).subscribe(() => {
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

  // onChange(event) {
  //   this.loginValue = event;
  // }
}
