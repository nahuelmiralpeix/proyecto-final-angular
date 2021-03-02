
import { AsignaturasService } from '../services/asignaturas.service';
import { AsignaturaObj } from './AsignaturasObj';

export interface CiclosObj{
    nombre:string;
    curso:number;
    asignaturas:AsignaturaObj[];
    imagen:string;

}