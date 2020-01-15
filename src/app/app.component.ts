import { Component, DoCheck } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  public title = 'angular-course';

  isAuth = true;
  loadingValue: boolean;

  constructor(
    private loadService: LoadingService
  ) {
  }

  openLoginPopup($event): void {
    // this.isAuth = false;
  }

  ngDoCheck() {
    this.loadingValue = this.loadService.loadingValue();
  }

}
