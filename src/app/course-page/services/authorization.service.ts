import { Injectable } from '@angular/core';
import { UserEntity } from '../../core/models/user-entity.model';

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

  getUserInfo(value: string) {
    console.log("login of user:", value);
    return value;
  }
}
