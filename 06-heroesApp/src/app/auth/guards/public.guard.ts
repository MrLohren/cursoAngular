import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate, CanMatch {

  constructor (
    private authService : AuthService,
    private router : Router
  ) {}

  private checkAuthStatus () : boolean | Observable<boolean> {
    return this.authService.checkAuth()
    .pipe(
      tap(isAuth => {
        if(isAuth) this.router.navigate(['./'])
      }),
    map(isAuth => !isAuth)
    )
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.checkAuthStatus()
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
      return this.checkAuthStatus()
  }
}
