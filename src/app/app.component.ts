import { Component } from '@angular/core';
import { AuthorizationService } from  './course-page/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-course';

  inputLoginValue: string = "login";

  isAuth = true;
  modal = false;

  constructor(
    private auth: AuthorizationService
  ) {
  }

  closeLoginPopup(): void {
    this.modal = false;
    this.isAuth = true;
    console.log("successfuly log in");
    this.auth.getUserInfo(this.inputLoginValue);
  }

  getLogin(value: string) {
    this.inputLoginValue = value;
  }

  openLoginPopup(): void {
    this.modal = true;
    this.isAuth = false;
  }
}
