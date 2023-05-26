import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../common/project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  URL: string = 'http://localhost:5000/project';
  constructor(private httpClient: HttpClient) {}

  addProject(data: Project):Observable<any> {
    let API_URL = `${this.URL}/create`;
    return this.httpClient.post(API_URL, data);
  }
  getAllProject():Observable<any>{
    return this.httpClient.get(`${URL}`);
  }
}
