import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideojuegosService } from '../../../shared/services/videojuegos.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit{
  public gameForm: FormGroup;
  estadoFormulario: string = "";
  console: Console[]=[];
  selectedFile: any;
  nameImg: string ="";

  constructor(private fb: FormBuilder, private videojuegosService: VideojuegosService, private dialogRef: MatDialogRef<NewGameComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.estadoFormulario = "Agregar";
      this.gameForm = this.fb.group( {
        name: ['', Validators.required],
        description: ['', Validators.required],
        year: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        console: ['', Validators.required],
        developer: ['', Validators.required],
      })

      if (data != null ){
        this.estadoFormulario = "Actualizar";
      }
    }
  
  ngOnInit(): void {
    this.getConsoles()
  }

  onSave() {

  }

  getConsoles(){
    this.videojuegosService.getConsoles().subscribe( (data: any) =>{
      console.log(data)
    }, (error: any) =>{
      console.log("error al consultar consolas");
    })
  }


  onCancel(){
    this.dialogRef.close(3);
  }
}
