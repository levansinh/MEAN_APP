import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL: string ='http://localhost:5000/user';

  constructor(private httpClient: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    })
  };
  getAllUser():Observable<any>{
    return this.httpClient.get<any>(`${this.URL}`,{ withCredentials: true });
  }
  getWithRole(role:number):Observable<any>{
    return this.httpClient.get<any>(`${this.URL}/role/${role}`,{ withCredentials: true });
  }

}
