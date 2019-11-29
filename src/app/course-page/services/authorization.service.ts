import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  public isAutorized: boolean;

  IsAuthenticated():void {

  }

  login() {
    this.isAutorized = true;
  }

  logout() {
    this.isAutorized = false;
  }

  getAutorizationValue():boolean {
    return this.isAutorized;
  }

  getUserInfo() {

  }
}
