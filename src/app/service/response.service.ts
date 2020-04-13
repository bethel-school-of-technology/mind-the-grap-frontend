import { Injectable } from '@angular/core';
import { Response } from '../models/response';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class ResponseService {
  private responseUrl = '/api/responses';
  // endpoint:string = 'http://localhost:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private apiService: ApiService
    ) { }

  // services go here... create, get, update, delete, errorhandling...

  // Get Assessments
  getResponses(): Observable<any> {
    return this.http.get(this.responseUrl);
  }

  createResponses(answerIds, questionIds, assessmentId): Observable<any> {
    // Need to figure out how to past all the parameters as one arguement (limited to 3 in post)
    var user_id = this.apiService.getUserId();
    const responseData = {
        "user_id": user_id,
        "assessment_id": assessmentId,
        "answer_option_id": answerIds
    }

    return this.http.post(this.responseUrl, responseData);
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
