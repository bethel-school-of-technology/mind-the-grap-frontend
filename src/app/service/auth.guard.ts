import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private router: Router,
    private apiService: ApiService,
  ) {} 

  canActivate(): boolean {
    if (this.apiService.logInUser()) {
      return true 
    } else {
      this.router.navigate(['/login'])
      return false
     }
  }
}
