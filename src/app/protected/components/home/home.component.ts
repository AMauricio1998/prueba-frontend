import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.service';
import  Chart  from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  chartBar: any;
  
  constructor(private dashboardService: DashboardService, private router: Router) { }


  ngOnInit(): void {
    if (localStorage.getItem('token') == '' || null) {
      this.router.navigateByUrl('/auth')
    }
    this.getConsolas();
  }

  getConsolas() {
    this.dashboardService.getConsolas().subscribe((data: any) => {
      console.log(data);
      this.proccessConsolasResponse(data)
    }, (err: any) => {
      console.log(err)
    })
  }

  proccessConsolasResponse(resp: any) {
    const nombreConsola: string[] = [];
    const cantidad: number[] = []

    if(resp.success) {
      let listaConsolas = resp.dashboard
      
      listaConsolas.forEach((consola: any)  => {
          nombreConsola.push(consola.console);
          cantidad.push(consola.total);
      });
    }

    //nuestro gráfico de barras
    this.chartBar = new Chart('canvas-bar', {
      type: 'bar',
      data: {
        labels: nombreConsola,
        datasets: [{ 
          label: 'Cantidad de juegos', 
          data: cantidad 
      }]
    }
  });

  }
}
