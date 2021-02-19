import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/pacientes';
import { MinsaService } from 'app/services/minsa.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  pacientes:Paciente[];

  datos : string;

  constructor( private minsaService : MinsaService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    this.minsaService.getVacunadosData().subscribe(pacientes =>{
        console.log(pacientes);
    
    });
  }
  
}
