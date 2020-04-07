import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = '/api/users';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.userUrl);
  }

  getById(_id: string) {
    return this.http.get<User>(this.userUrl + '/' + _id)
  }

}