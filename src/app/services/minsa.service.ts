import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from 'app/models/pacientes';

import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinsaService {

  private url = 'https://gis.minsa.gob.pe/WebApiReplica/api/ActVacunasResumen/ResumenFasePublico';

  constructor( private http: HttpClient) { 

  }


  getVacunadosData() : Observable<Paciente[]> {

    const authData = {
      DisaCodigo: 0,
      IdDepartamento: "",
      IdDistrito: "",
      IdEstablecimiento: 0,
      IdFase: 1,
      IdProvincia: "",
    };

    return this.http.post<Paciente[]>(this.url, { authData });
}


}
