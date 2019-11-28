import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor() { }

  counter = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }

  IsAuthenticated():void {

  }

  login() {

  }

  logout() {

  }

  getUserInfo() {

  }
}
