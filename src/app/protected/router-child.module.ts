import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VidegamesComponent } from './pages/videgames/videgames.component';


const childRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'videogames', component: VidegamesComponent },
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule { }
