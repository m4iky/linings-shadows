import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../../../servicios/vehiculos.service'

declare var Materialize
@Component({
  selector: 'app-vehiculos-admin',
  templateUrl: './vehiculos-admin.component.html',
  styleUrls: ['./vehiculos-admin.component.css']
})
export class VehiculosAdminComponent implements OnInit {

  constructor(private _Vehiculos:VehiculosService) {
    this._Vehiculos.mostrarVehiculos()

   }

  ngOnInit() {
    this._Vehiculos.mostrarVehiculos()

  }

  eliminar(key){
      this._Vehiculos.eliminar(key)
  }
}
