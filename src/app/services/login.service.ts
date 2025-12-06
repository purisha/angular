import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api/login'; // آدرس API

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
