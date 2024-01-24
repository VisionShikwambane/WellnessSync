import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }


  decodeUserRoleFromToken(token: string): string {
    const decodedToken: any = jwtDecode(token);
    const userRole: string = decodedToken.role;
    return userRole;
  }


}
