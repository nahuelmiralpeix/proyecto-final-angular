import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CiclosService } from 'src/app/services/ciclos.service';
import { CiclosObj } from 'src/app/utils/CiclosObj';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  ciclos:CiclosObj[];


  constructor(private ciclosService:CiclosService,private gestorRutas:Router) { }

  ngOnInit(): void {
    this.ciclos = this.ciclosService.getAllCiclos();
  }

  irCiclo(ciclo:string,curso:number){
    //console.log("Hola");
    this.gestorRutas.navigate(['ciclos',ciclo,curso]);


  }

}
