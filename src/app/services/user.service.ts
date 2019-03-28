import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this
            .http
            .get(`${this.baseUrl}/users?per_page=6`)
            .pipe(
              map(request => request['data'])
            );
  }
}
