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
    return this.http.get('http://localhost:3004/users').pipe(
      map(response => {
        if (response) {
          for (let key in response) {
            if( (response[key].login === user.login) && (response[key].password === user.password)) {
              user.id = response[key].id;
              user.first = response[key].name.first;
              user.last = response[key].name.last;
              this.isAutorized = true;
              sessionStorage.setItem('token', response[key].fakeToken);
              console.log("successfuly log in", response[key].fakeToken);
            } else {
              sessionStorage.clear();
            }
          }
        }
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

  getUserById(id: number) {
    return this.http.get<UserEntity>(`http://localhost:3004/users/${id}`);
  }
}
