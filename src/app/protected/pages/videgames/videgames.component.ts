import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { VideojuegosService } from '../../../shared/services/videojuegos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewGameComponent } from '../new-game/new-game.component';

@Component({
  selector: 'app-videgames',
  templateUrl: './videgames.component.html',
  styleUrls: ['./videgames.component.css']
})
export class VidegamesComponent implements OnInit{
  opciones: any[] = [
    {value: "nombre"},
    {value: "año"},
    {value: "desarrollador"},
    {value: "consolas"},
  ]

  filtros: Object = {
      "filters": {},
      "pagination": {
        "page": 0,
        "limit": 0
      }
    }

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private videojuegosService: VideojuegosService) { }

  ngOnInit(): void {
    this.getVideojuegos();
  }

  displayedColumns: string[] = ['developer', 'name' ,'description', 'year', 'console', 'image',  'actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getVideojuegos() {
    this.videojuegosService.getVideojuegos(this.filtros).subscribe( (data:any) => {
      console.log("respuesta de productos: ", data);
      this.processProductResponse(data);
    }, (error: any) => {
      console.log("error en productos: ", error);
    })
  }

  processProductResponse(resp: any){ 
    const dateGame: any[] = [];
    if( resp.success){
      let listGame = resp.videogames;

      listGame.forEach((element: any) => {
        if(element.name) {
          dateGame.push(element);
        }
      });

      //set the datasource
      this.dataSource = new MatTableDataSource<any>(dateGame);
      this.dataSource.paginator = this.paginator;
    }
  }

  openGameDialog() {
    const dialogRef = this.dialog.open(NewGameComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if( result == 1){
        this.openSnackBar("Videojuego Agregado", "Exitosa");
        this.getVideojuegos();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al guardar el Videojuego", "Error");
      }
    });
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }
}
