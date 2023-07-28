import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse, UserToken } from '../interfaces/AuthInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario?: UserToken

  get usuario() {
    return { ...this._usuario }
  }

  constructor( private http: HttpClient) { }

  login(name: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Establece el tipo de contenido JSON
    });
    const url = `${this.baseUrl}/access/get-token`;
    const body = {name}
    const options = { headers: headers };

    return this.http.post<AuthResponse>(url, body, options)
      .pipe(
        tap( resp => {
          if( resp.success ) {
            localStorage.setItem('token', resp.token!)
            this._usuario = {
              token: resp.token!
            }
          }
        }),
        map( resp => resp.success),
        catchError( err => of(false) )
      );
  }
}
