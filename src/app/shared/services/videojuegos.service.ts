import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getVideojuegos(termino: any){
    const headers = new HttpHeaders({
      'Accept': 'application/json', // Establece el tipo de contenido JSON
      'Content-Type': 'application/json',
      'Authorization': `${this.getToken()}` 
    });

    const url = `${this.baseUrl}/api/videogames/search`;
    const body = termino
    const options = { headers: headers };

    return this.http.post(url, body, options);
  }

  saveGame(body: any) {
    const headers = new HttpHeaders({
      'Accept': 'application/json', // Establece el tipo de contenido JSON
      'Content-Type': 'application/json',
      'Authorization': `${this.getToken()}` 
    });

    const url = `${this.baseUrl}/api/videogames`;
    const options = { headers: headers };

    return this.http.post(url, body, options);
  }

  getConsoles() {
    const headers = new HttpHeaders({
      'Accept': 'application/json', // Establece el tipo de contenido JSON
      'Content-Type': 'application/json',
      'Authorization': `${this.getToken()}` 
    });

    const url = `${this.baseUrl}/api/consoles/catalog`;
    const options = { headers: headers };

    return this.http.get(url, options);
  }

  getDevelopers() {
    const headers = new HttpHeaders({
      'Accept': 'application/json', // Establece el tipo de contenido JSON
      'Content-Type': 'application/json',
      'Authorization': `${this.getToken()}` 
    });

    const url = `${this.baseUrl}/api/developer/catalog`;
    const options = { headers: headers };

    return this.http.get(url, options);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
