import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private userUrl = `/api/users`;
  //endpoint:string = 'http://localhost:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  
  constructor(
    private http: HttpClient, 
    private router: Router) {}

  // services go here... create, get, update, delete, errorhandling...

  // Create
  createUser(userData): Observable<any> {
    return this.http.post(this.userUrl, userData);
  }

  getQuestions(){
    return this.http.get(`/api/questions`);
  }

  // Error handling
  // errorMgmt(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if(error.error instanceof ErrorEvent) {
  //     //Get Client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   //console.log(errorMessage);
  //   //return throwError(errorMessage);
  // }

 
  }


