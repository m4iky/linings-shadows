import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {VehiculosService} from './../../servicios/vehiculos.service';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {


    constructor(private db: AngularFireDatabase,private _vehiculos:VehiculosService) {


    }

  ngOnInit() {
        this._vehiculos.oferta()

  }

}
