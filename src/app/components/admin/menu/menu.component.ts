import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
usuario:string;
cantVehiculos:any;
cantOfertas:any;

  constructor(db:AngularFireDatabase) {
    this.usuario = localStorage.getItem('nombre')

    const queryObservable = db.list('/vehiculos', {
  query: {

  }
}).subscribe(gg=>{
  this.cantVehiculos=gg.length
});

const GG = db.list('/vehiculos', {
query: {
orderByChild: 'estado',
equalTo: 2
}
}).subscribe(gg=>{
  this.cantOfertas=gg.length
});
   }

  cerrarSession(){
    localStorage.clear()
    location.href="/"
  }
  ngOnInit() {
  }

}
