import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:7049/api/Users';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  getUserProfile(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUserProfile(id: number, user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }
}
