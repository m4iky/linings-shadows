import { Component, OnInit } from '@angular/core';

import {VehiculosService} from './../../../servicios/vehiculos.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/Rx'
import {Http} from '@angular/http';

declare var $

@Component({
  selector: 'app-exclusivos',
  templateUrl: './exclusivos.component.html',
  styleUrls: ['./exclusivos.component.css']
})
export class ExclusivosComponent implements OnInit {
carros:FirebaseListObservable<any[]>

  constructor(private http:Http, private db:AngularFireDatabase) {

    this.carros = this.db.list('vehiculos',{
      query:{
        orderByChild:'precio',
        limitToLast:3
      }
    })


   }

  ngOnInit() {
  }

}
