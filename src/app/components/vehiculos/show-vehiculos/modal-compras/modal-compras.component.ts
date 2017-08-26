import { Component, OnInit } from '@angular/core';
import {VehiculosService} from './../../../../servicios/vehiculos.service';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

declare var Materialize
declare var $
@Component({
  selector: 'app-modal-compras',
  templateUrl: './modal-compras.component.html',
  styleUrls: ['./modal-compras.component.css']
})
export class ModalComprasComponent implements OnInit {

datosCompra={
  from_name:"",
  numero:"",
  email_address:""
}

validar:FormGroup
compra:any[]=[];
  constructor(private _mostrar:VehiculosService,private _router:ActivatedRoute) {
    this._router.params.subscribe(res=>{
        this._mostrar.traerDatosEditar(res['key']).subscribe(x=>{
            this.compra=x
        })
    })
    this.ocultar()

    $(document).ready(function(){
// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();

    });


   }
  //  Funcion para limpiar el modal
   Compras(){
     setTimeout(()=>{
       this.Actualizar()
     },2000)
   }

     Actualizar(){
       Materialize.toast("Se ha enviado correctamente",3000,'#4caf50 green rounded')
       this.validar.reset()

     }
     ////////////////

   ///FUncion para ocultar el div que tiene los datos de comprar
ocultar(){
  $(".texta").hide()
}
///////////
  ngOnInit() {
    this.validar=new FormGroup({
      'from_name':new FormControl('',[Validators.required]),
      'numero':new FormControl('',[Validators.required,Validators.pattern("[0-9/-]{1,}")]),
      'email_address':new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")])

    })

    this.ocultar()
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });

      $(document).ready(function(){
      $('ul.tabs').tabs();
    });


     // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
     $('.modal').modal();

  }

}
