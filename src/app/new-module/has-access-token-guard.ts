import { Injectable, NgModule } from '@angular/core';
import type { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { CredentialsService } from '@app/auth';

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanActivate {
  constructor(private credentialsService: CredentialsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const { token } = this.credentialsService.credentials;
    if (!token) {
      this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
      return false;
    }
    return true;
  }
}
