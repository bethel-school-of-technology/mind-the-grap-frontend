import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private userUrl = `/api/users`;
  endpoint: string = 'http://localhost:5000/api/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(
    private http: HttpClient,
    private router: Router){
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
     }

     public get currentUserValue(): User {
       return this.currentUserSubject.value;
     }

     logInUser(email: string, password: string) {
      let url = `${this.endpoint}/login`
      return this.http.post<any>(url, {email, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if(user && user.token) {
          //store user details and Jwt in local storage to keep user logged in between pages
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
    }
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
  // services go here... create, get, update, delete, errorhandling...

  // Create
  createUser(userData): Observable<any> {
    let url = `${this.endpoint}/signup`
    return this.http.post(url, userData);

  }
 
  // store the user id in local storage
  storeUserData = function (token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  getQuestions() {
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


