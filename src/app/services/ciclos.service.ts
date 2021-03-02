import { Injectable } from '@angular/core';
import { AsignaturaObj } from '../utils/AsignaturasObj';
import { CiclosObj } from '../utils/CiclosObj';
import { AsignaturasService } from './asignaturas.service';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  ciclos:CiclosObj[]=[
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: this.asignaturaService.rellenarAsignaturas('DAM',1),
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: this.asignaturaService.rellenarAsignaturas('DAM',2),
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: this.asignaturaService.rellenarAsignaturas('DAW',1),
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: this.asignaturaService.rellenarAsignaturas('DAW',2),
      imagen: 'assets/images/daw.jpeg',
    },
  ];

  constructor(private asignaturaService:AsignaturasService) { }

  getAllCiclos():CiclosObj[]{
    return this.ciclos;
  }

  
}
