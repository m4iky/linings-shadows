import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../../../../../servicios/ofertas.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

declare var $
@Component({
  selector: 'app-modal-oferta',
  templateUrl: './modal-oferta.component.html',
  styleUrls: ['./modal-oferta.component.css']
})
export class ModalOfertaComponent implements OnInit {

oferta={
  precioOfer:"",
  descripcionOfer:""
}
id;
validar:FormGroup;
  constructor(private _Active:ActivatedRoute,private _Ofertas:OfertasService) {
    this._Active.params.subscribe(res=>{
      this._Ofertas.traerOferta(res['key']).subscribe(data=>{
        this.id=res['key']
        this.oferta.precioOfer=data.precioOfer
        this.oferta.descripcionOfer=data.descripcionOfer
      })
    })


    $(document).ready(function(){
// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }
/////Funcion que modificar
  guardar(){
    this._Ofertas.modificarOferta(this.id,this.oferta)
  }
/////////////////////////////////////////////////////////
  ngOnInit() {

    this.validar=new FormGroup({
      'descripcionOfer':new FormControl('',[Validators.required]),
      'precioOfer':new FormControl('',[Validators.required,Validators.pattern("[0-9]{1,}")])
    })

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
