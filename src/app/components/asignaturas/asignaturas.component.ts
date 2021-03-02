import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { CiclosService } from 'src/app/services/ciclos.service';
import { AsignaturaObj } from 'src/app/utils/AsignaturasObj';
import { CiclosObj } from 'src/app/utils/CiclosObj';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css'],
})
export class AsignaturasComponent implements OnInit {
  asignaturas: AsignaturaObj[];
  asignaturasFiltradas: AsignaturaObj[];

  constructor(private servicioAsignaturas: AsignaturasService) {}

  ngOnInit(): void {
    this.asignaturas = this.servicioAsignaturas.getAllAsignaturas();
  }

  cargarArrayAsignatura(nombre: string, ciclo: string, conocimiento: string) {
    this.asignaturasFiltradas = []
    console.log(nombre);
    console.log(ciclo);
    console.log(conocimiento);

    if (nombre === '' && ciclo === '' && conocimiento === '') {
      this.asignaturasFiltradas = this.servicioAsignaturas.getAllAsignaturas();
      console.log("he entrado");

    } else if (nombre !== '' && ciclo !== '' && conocimiento !== '') {
      this.asignaturas.forEach(asignatura => {
        asignatura.conocimientos.forEach(conocimientos => {
          if ( asignatura.nombre.toLowerCase().includes(nombre.toLowerCase()) && asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase()) && conocimiento === conocimientos.nombre) {
            this.asignaturasFiltradas.push(asignatura);
          }
        });
      });

    } if (nombre !== '' && ciclo === '' && conocimiento === '') {
      this.asignaturas.forEach(asignatura => {
        if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase())) {
          this.asignaturasFiltradas.push(asignatura);
        }
      });

    } if (nombre !== '' && ciclo !== '' && conocimiento === '') {
      this.asignaturas.forEach(asignatura => {
        if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase()) && asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
          this.asignaturasFiltradas.push(asignatura);
        }
      });

    } if (nombre === '' && ciclo !== '' && conocimiento === '') {
      this.asignaturas.forEach(asignatura => {
        if (asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
          this.asignaturasFiltradas.push(asignatura);
        }
      });

    } if (nombre === '' && ciclo !== '' && conocimiento !== '') {
      this.asignaturas.forEach(asignatura => {
        asignatura.conocimientos.forEach(conocimientos => {
          if (asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase()) && conocimiento === conocimientos.nombre) {
            this.asignaturasFiltradas.push(asignatura);
          }
        });
      });

    } if (nombre === '' && ciclo === '' && conocimiento !== '') {
      this.asignaturas.forEach(asignatura => {
        asignatura.conocimientos.forEach(conocimientos => {
          if (conocimiento === conocimientos.nombre) {
            this.asignaturasFiltradas.push(asignatura);
          }
        });
      });

    } if (nombre !== '' && ciclo === '' && conocimiento !== '') {
      this.asignaturas.forEach(asignatura => {
        asignatura.conocimientos.forEach(conocimientos => {
          if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase()) && conocimiento === conocimientos.nombre) {
            this.asignaturasFiltradas.push(asignatura);
          }
        });
      });

    }
    console.log(this.asignaturasFiltradas);
    
    
    
  }
}
