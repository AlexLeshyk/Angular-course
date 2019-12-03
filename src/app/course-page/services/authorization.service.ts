import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  public isAutorized: boolean;

  login() {
    this.isAutorized = true;
  }

  logout() {
    this.isAutorized = false;
  }

  // IsAuthenticated method (boolean)
  getAutorizationValue():boolean {
    return this.isAutorized;
  }

  getUserInfo() {

  }
}
