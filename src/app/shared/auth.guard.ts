import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from  './services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getAutorizationValue()) {
      return true;
    } else {
      this.router.navigate(['/courses'], {
        queryParams : {
          loginAgain: true
        }
      })
    }
  }
}
