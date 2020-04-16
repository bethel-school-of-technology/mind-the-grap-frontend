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

  //canActivate method is calling localStorage to getItem if the currentUser has credentials to access a page
  //RouteGuard routing can be found @ app-routing-modules.ts
  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true 
    } else {
      this.router.navigate(['/login'])
      return false
     }
  }
}
