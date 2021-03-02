import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosService } from './services/ciclos.service';
import { AsignaturasService } from './services/asignaturas.service';
import { DetalleCicloComponent } from './components/detalle-ciclo/detalle-ciclo.component';
import { CiclosPipe } from './pipes/ciclos.pipe';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CiclosComponent,
    AsignaturasComponent,
    DetalleCicloComponent,
    CiclosPipe,
    ImagenPipe,
    AsignaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CiclosService,AsignaturasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
