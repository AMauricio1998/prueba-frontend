import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getConsolas(){
    const headers = new HttpHeaders({
      'Accept': 'application/json', // Establece el tipo de contenido JSON
      'Authorization': `${this.getToken()}` 
    });
    const url = `${this.baseUrl}/api/consoles/dashboard`;
    const options = { headers: headers };

    return this.http.get(url, options);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
