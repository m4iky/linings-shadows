import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../../servicios/vehiculos.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-ofert',
  templateUrl: './ofert.component.html',
  styleUrls: ['./ofert.component.css']
})
export class OfertComponent implements OnInit {

estadoOfertas:boolean=false
  queryObservable:FirebaseListObservable<any>
  constructor(private db:AngularFireDatabase) {

    const queryObservable = db.list('/vehiculos', {
  query: {
    orderByChild: 'estado',
    equalTo: 2
  }
}).subscribe(gg=>{
  if(gg.length>0){
    this.estadoOfertas=true
  }else{
    this.estadoOfertas=false

  }

});

   }

  ngOnInit() {
    const queryObservable = this.db.list('/vehiculos', {
  query: {
    orderByChild: 'estado',
    equalTo: 2
  }
}).subscribe(gg=>{
  if(gg.length>0){
    this.estadoOfertas=true
  }else{
    this.estadoOfertas=false

  }

});
  }

}
