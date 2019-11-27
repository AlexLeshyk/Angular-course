import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-course';

  isAuth = true;
  modal = false;

  closeLoginPopup(): void {
    this.modal = false;
    this.isAuth = true;
    console.log("successfuly log in");
  }

  openLoginPopup(): void {
    this.modal = true;
    this.isAuth = false;
  }

  construstor() {
  }
}
