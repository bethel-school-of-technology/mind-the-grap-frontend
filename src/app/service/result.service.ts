import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private resultUrl = '/api/results';

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }
  // Get results based on User ID and Assessment ID

  getResults(assessment_id, user_id): Observable<any> {
    const resultBody = {
      "user_id": user_id,
      "assessment_id": assessment_id,
    }
    return this.http.post(this.resultUrl, resultBody);
  }
}

