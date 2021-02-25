import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-data',
  templateUrl: './registro-data.component.html',
  styleUrls: ['./registro-data.component.css']
})
export class RegistroDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      text: 'Enviando...'
    });
    Swal.showLoading();
    setTimeout(()=>{                        
      Swal.close();
      Swal.fire({
        allowOutsideClick:false,
        icon: 'success',
        text: 'Registro finalizado. Gracias por ser parte de la lucha contra el COVID'
      });

    }, 2000);
  
  }

}
