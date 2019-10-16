import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';

  construstor() {
    interface UserInterface {
      name: string
      age: number
      logInfo: () => void
      id?: any
    }

    const user: UserInterface = {
      name: 'Alex',
      age: 30,
      logInfo() {
        console.log(this.name + ' ' + this.age)
      }
    }
  }
}
