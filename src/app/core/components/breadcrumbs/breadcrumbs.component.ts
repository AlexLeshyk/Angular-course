import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AuthorizationService } from  '../../../shared/services/authorization.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {

  @Input() public courseTitle: string = '';
  public isAuthenticated: boolean;

  constructor(
    private auth: AuthorizationService
  ) { }

  ngOnInit() {
    this.isAuthenticated = this.auth.getAutorizationValue();
  }

}
