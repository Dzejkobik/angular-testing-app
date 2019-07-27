import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router) { }

  canLoad() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
    return !this.authService.isLoggedIn();
  }

  canActivate() {
    return this.canLoad();
  }


}
