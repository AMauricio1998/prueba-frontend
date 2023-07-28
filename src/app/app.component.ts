import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prueba-frontend';

  ngOnInit(): void {
    // Obtener el token desde el LocalStorage
    const token = localStorage.getItem('access_token');

    // Realizar cualquier lógica adicional con el token, por ejemplo, enviarlo al servidor en las solicitudes
    console.log('Token:', token);
  }
}
