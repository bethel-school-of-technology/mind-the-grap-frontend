import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  private assessmentUrl = '/api/questions';
  // endpoint:string = 'http://localhost:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Get Questions by Assessment ID
  getQuestions(assessment_id): Observable<any> {
    return this.http.get(this.assessmentUrl + "/" + assessment_id);
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
