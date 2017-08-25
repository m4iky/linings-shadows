import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehiculosService} from '../../../../../servicios/vehiculos.service';
declare var $
@Component({
  selector: 'app-ofertas-vehiculo',
  templateUrl: './ofertas-vehiculo.component.html',
  styleUrls: ['./ofertas-vehiculo.component.css']
})
export class OfertasVehiculoComponent implements OnInit {
  parametro;
  datos:any={
    marca: '',
    modelo:'',
    precioactual:'',
    oferta:''
  }
  constructor(private _Active : ActivatedRoute, private _vehiculosService: VehiculosService) {
      this._Active.params.subscribe(res=>{
        this._vehiculosService.traerDatosEditar(res['key']).subscribe(data=>{
          this.parametro = res['key']

          this.datos.marca = data.marca
          this.datos.modelo = data.modelo
          this.datos.precioactual = data.precio
        })
      })




    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }

  ngOnInit() {
  
    $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  }

}
