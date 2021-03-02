import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { DetalleCicloComponent } from './components/detalle-ciclo/detalle-ciclo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"ciclos",component:CiclosComponent},
  {path:"ciclos/:nombre/:curso",component:DetalleCicloComponent},
  {path:"asignaturas",component:AsignaturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
