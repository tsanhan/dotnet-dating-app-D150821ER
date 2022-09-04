import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //an injectable singleton (does not destroys until we close our app)
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
