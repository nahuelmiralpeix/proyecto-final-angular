import { Component, Input, OnInit } from '@angular/core';
import { AsignaturaObj } from 'src/app/utils/AsignaturasObj';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  @Input() asignatura:AsignaturaObj; 

  constructor() { }

  ngOnInit(): void {
  }

}
