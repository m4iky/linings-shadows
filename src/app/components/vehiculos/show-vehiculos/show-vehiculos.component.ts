import { Component, OnInit } from '@angular/core';
import {VehiculosService} from './../../../servicios/vehiculos.service';
declare var $
@Component({
  selector: 'app-show-vehiculos',
  templateUrl: './show-vehiculos.component.html',
  styleUrls: ['./show-vehiculos.component.css']
})
export class ShowVehiculosComponent implements OnInit {

  constructor(private _mostrarVehiculos:VehiculosService) {
    $(document).ready(function(){
$('.tooltipped').tooltip({delay: 50});
});

   }


  ngOnInit() {
    this._mostrarVehiculos.mostrarVehiculos()
    $(document).ready(function(){
   $('.tooltipped').tooltip({delay: 50});
 });
  }

}
