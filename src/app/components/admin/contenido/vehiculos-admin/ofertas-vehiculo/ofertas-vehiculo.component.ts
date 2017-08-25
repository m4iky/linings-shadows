import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehiculosService} from '../../../../../servicios/vehiculos.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

declare var $
@Component({
  selector: 'app-ofertas-vehiculo',
  templateUrl: './ofertas-vehiculo.component.html',
  styleUrls: ['./ofertas-vehiculo.component.css']
})
export class OfertasVehiculoComponent implements OnInit {
  validar:FormGroup;

  parametro;
  datos:any={
  precioOfer:'',
  estado:''

  }
  constructor(private _Active : ActivatedRoute, private _vehiculosService: VehiculosService) {
    this._Active.params.subscribe(res=>{
      this._vehiculosService.traerDatosEditar(res['id']).subscribe(data=>{
        this.parametro=res['id']


        this.datos = data
        })

      })




    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }

  ngOnInit() {
    this.validar = new FormGroup({
      'precioOfer' : new FormControl('', [Validators.required, Validators.pattern("[0-9]{1,}")])

    })



    $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  }
oferta(){
  this.datos.estado = 2


  this._vehiculosService.subirOferta(this.parametro, this.datos)
  }
}
