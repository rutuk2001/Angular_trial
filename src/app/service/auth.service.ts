import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3001/users'
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${this.apiUrl}/getUser`);
  }
}
