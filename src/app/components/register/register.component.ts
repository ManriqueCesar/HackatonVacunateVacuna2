import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  focus: any;
  loadingResponse: boolean;
  confirmacion: boolean;

  constructor() { 

    this.loadingResponse = true;
    this.confirmacion = false;
  }



  ngOnInit(): void {

   
  }

  validarCampos(){

    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      text: 'Validando sus datos...',
      
    });
    Swal.showLoading();
    setTimeout(()=>{                        
      this.loadingResponse = false;
      Swal.close();
    }, 2000);

  }


  confirmacionCheck(){
    if(this.confirmacion){
      this.confirmacion=false
    }else
    this.confirmacion=true;

   }
  

}
