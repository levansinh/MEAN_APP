import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {register,login} from '../common/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL: string ='http://localhost:5000';
constructor(private httpClient: HttpClient) { }
private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
};
registerUser(data: register):Observable<any> {
  return this.httpClient.post(`${this.URL}/auth/register`, data,{ withCredentials: true });
}
loginUser(data: login) {
  return this.httpClient.post(`${this.URL}/auth/login`, data,{ withCredentials: true });
}
logoutUser(){
  return this.httpClient.get(`${this.URL}/auth/logout`,{ withCredentials: true })
}
}
