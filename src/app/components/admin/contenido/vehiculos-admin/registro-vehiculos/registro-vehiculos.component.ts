import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {VehiculosService} from '../../../../../servicios/vehiculos.service';
@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent implements OnInit {
  vehiculos:any={
    marca: '1',
    modelo: '2',
    precio: '3',
    descripcion: '4',
  }
  constructor() {

   }

  ngOnInit() {
  }

}
