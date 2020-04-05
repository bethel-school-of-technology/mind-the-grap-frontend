import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Response } from '../models/response';
import { Question } from '../models/question';


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private questionUrl = '/api/questions';
  private responseUrl = '/api/responses';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private router : Router) {}


 // get("/api/responses")
  getResponse(question_id): Observable<any> {
    return this.http.get(this.responseUrl + '/' + question_id);
  }
 
  //get quesitons
  getQuestions(assessment_id): Observable<any> {
    return this.http.get(this.questionUrl + '/' + assessment_id);
  }

//  getAllResponses(): Promise<void | Response[]> {
//     return this.http.get(this.responseUrl)
//       .toPromise()
//       .then(answer => answer.json() as Response[])
//       .catch(this.handleError);
//   }


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

private handleError (error: any) {
  let errMsg = (error.message) ? error.message :
  error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); 
}

}
