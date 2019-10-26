import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { FormsModule } from '@angular/forms';
import { LoginButtonsComponent } from './components/login-buttons/login-buttons.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent, SearchControlComponent, LoginButtonsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchControlComponent
  ]
})
export class CoreModule { }
