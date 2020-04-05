import { Injectable } from '@angular/core';
import { Response } from '../models/response';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ResponseService {
  private responseUrl = '/api/assessments';
  // endpoint:string = 'http://localhost:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // services go here... create, get, update, delete, errorhandling...

  // Get Assessments
  getResponses(): Observable<any> {
    return this.http.get(this.responseUrl);
  }

  createResponses(answerIds, questionIds, assessmentId, userId): Observable<any> {
    // Need to figure out how to past all the parameters as one arguement (limited to 3 in post)
    return this.http.post(this.responseUrl, answerIds, userId);
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      //Get Client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
