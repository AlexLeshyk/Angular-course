import { Component, DoCheck } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  public title = 'angular-course';

  loadingValue: boolean;

  constructor(
    private loadService: LoadingService
  ) {
  }

  ngDoCheck() {
    this.loadingValue = this.loadService.loadingValue();
  }

}
