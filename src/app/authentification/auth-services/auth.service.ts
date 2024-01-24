import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { LoginVM } from 'src/app/models/loginVM';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7103/api/'; 

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  login(credentials: LoginVM): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}Auth/login`, credentials) .pipe(
      map(response => response.token)
    );;
  }


  logout(): void {
    this.jwtService.removeToken();
  }



}
