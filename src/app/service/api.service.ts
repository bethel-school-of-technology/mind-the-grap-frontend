import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private userUrl = `/api/users`;
  endpoint:string = 'http://localhost:5000/api/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(
    private http: HttpClient, 
    private router: Router,) {}

  // services go here... create, get, update, delete, errorhandling...

  // Create USER
  createUser(userData): Observable<any> {
    let url = `${this.endpoint}/signup`
    return this.http.post(url, userData);
    
  }
// Update USER
  updateUser(userData): Observable<any> {
    //Need user Id to dynamicly generate this URL 
    var user_id = "5e85fedcd359371cd53d4e2d";
    let url = `${this.endpoint}/profile_edit/` + user_id;
    console.log(userData);
    return this.http.put(url, userData);
    
  }

  // Get USER
  getUser(): Observable<any> {
    // console.log("Got to start of request.");
    var token = localStorage.getItem('currentUser');
    // console.log("Set Token Variable:");
    // console.log(token);
    // console.log("attempt to decode token:");
    var decoded = jwt_decode(token);
    // console.log("Decoded Token, should have user_id:") 
    // console.log(decoded);   
    let url = `${this.endpoint}/profile/` + decoded._id
    // console.log("Url configured:");
    // console.log(url);
    return this.http.get(url);
  }

// Login USER
  // logInUser(userData): Observable<any> {
  //   let url = `${this.endpoint}/login`
  //   return this.http.post(url, userData);
  //}

  //new login logic

  logInUser(userData) {
    let url = `${this.endpoint}/login`
    return this.http.post<any>(url, { email: userData.email, password: userData.password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            // console.log("userdata:");
            // console.log(user.token);
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // console.log("GOT HERE");
                localStorage.setItem('currentUser', JSON.stringify(user.token));

            }

            return user;
        }));
}

logout() {
    localStorage.removeItem('currentUser');
    //return this.http.get(`/home`);
   this.router.navigate(['/home']);
}

  getQuestions(){
    return this.http.get(`/api/questions`);
  }

  //Error handling
   errorMgmt(error: HttpErrorResponse) {
     //let errorMessage = '';
    //  if(error.error instanceof ErrorEvent) {
    //    Get Client-side error
    //     errorMessage = error.error.message;
    //  } else {
    //     Get server-side error
    //  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //  }
    //  console.log(errorMessage);
    //    return throwError(errorMessage);
   }

 
  }


