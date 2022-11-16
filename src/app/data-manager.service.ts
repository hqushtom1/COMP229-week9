import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  // https://jsonplaceholder.typicode.com/users/2
  getDataByID(id: any): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
