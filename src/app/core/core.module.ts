import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { LoginButtonsComponent } from './components/login-buttons/login-buttons.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent, LoginButtonsComponent, LoginPageComponent, LoginPageComponent, NotFoundComponent, LoadingComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    BreadcrumbsComponent,
    LoadingComponent
  ]
})
export class CoreModule { }
