import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CiclosService } from 'src/app/services/ciclos.service';
import { CiclosObj } from 'src/app/utils/CiclosObj';

@Component({
  selector: 'app-detalle-ciclo',
  templateUrl: './detalle-ciclo.component.html',
  styleUrls: ['./detalle-ciclo.component.css']
})
export class DetalleCicloComponent implements OnInit {

  constructor(private gestorRutasActivas: ActivatedRoute,private cicloService:CiclosService) { }

  ciclos:CiclosObj[];
  cicloParametro:CiclosObj;

  ngOnInit(): void {

    this.ciclos = this.cicloService.getAllCiclos();
    this.cicloParametro;

    this.ciclos.forEach(element => {
      if (this.gestorRutasActivas.snapshot.paramMap.get('nombre')==element.nombre && this.gestorRutasActivas.snapshot.paramMap.get('curso')==element.curso.toString()) {
        this.cicloParametro=element;
      }
    });
    console.log(this.cicloParametro);
    
  }

}
