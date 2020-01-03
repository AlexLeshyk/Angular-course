import { Injectable } from '@angular/core';
import { UserEntity } from '../../core/models/user-entity.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  private isAutorized: boolean;

  login() {
    this.isAutorized = true;
  }

  logout() {
    this.isAutorized = false;
  }

  // get isAutorized value
  getAutorizationValue():boolean {
    return this.isAutorized;
  }

  // IsAuthenticated method
  IsAuthenticated(): Promise<boolean> {
    return new Promise ( resolve => {
      setTimeout(() => {
        resolve(this.isAutorized)
      }, 800);
    })
  }

  getUserInfo(value: string) {
    console.log("login of user:", value);
    return value;
  }
}
