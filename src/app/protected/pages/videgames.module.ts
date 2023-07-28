import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VidegamesComponent } from './videgames/videgames.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewGameComponent } from './new-game/new-game.component';



@NgModule({
  declarations: [
    VidegamesComponent,
    NewGameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VidegamesModule { }
