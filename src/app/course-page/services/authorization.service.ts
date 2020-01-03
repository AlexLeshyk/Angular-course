import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEntity } from '../../core/models/user-entity.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  private isAutorized: boolean;

  login(user: UserEntity): Observable<any> {
    this.isAutorized = true;
    return this.http.get('http://localhost:3004/users').pipe(
      map(response => {
        console.log('Response!!!', response)
        return response
      })
    )
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
