import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { LoginButtonsComponent } from './components/login-buttons/login-buttons.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent, LoginButtonsComponent, LoginPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    BreadcrumbsComponent
  ]
})
export class CoreModule { }
