import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private apiUrl = 'https://localhost:7103/api/'; 

  constructor(private httpClient: HttpClient) { }

  Register(model: any): Observable<any> {
    console.log('Executing Register method');
    return this.httpClient.post<any>(`${this.apiUrl}Auth/RegisterUser`, model);
  }

}
