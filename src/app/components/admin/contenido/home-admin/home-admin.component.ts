import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import {Http} from '@angular/http';
import 'rxjs/Rx'
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

vehiculos:FirebaseListObservable<any[]>;
cant = 0;
select = "";
  constructor(private db:AngularFireDatabase , private _http:Http) {
          this.vehiculos = db.list('vehiculos',{
            query:{
              orderByChild:'posicion'
            }
          })

  }
  sele(key){
    this.select = key
  }
  ngOnInit(){
    this.vehiculos.subscribe(res =>{
      if(this.select == ""){
        this.select = res[0].$key
      }
      this.cant = res.length-1

    })
  }
// POSICIONES
subir(key,pos){
let hola = this.metodo().subscribe(data =>{
  for(let a in data){
    if(data[a].posicion == (pos - 1)){
      let mamaguevo:FirebaseObjectObservable<any>
      mamaguevo = this.db.object('vehiculos/'+a)
      mamaguevo.update({posicion:pos})
  }
  }
  let mamaguevo:FirebaseObjectObservable<any>
  mamaguevo = this.db.object('vehiculos/'+key)
  mamaguevo.update({posicion:pos-1})
})
}

bajar(key,pos){
let hola = this.metodo().subscribe(data =>{
  for(let a in data){
    if(data[a].posicion == (pos + 1)){
      let mamaguevo:FirebaseObjectObservable<any>
      mamaguevo = this.db.object('vehiculos/'+a)
      mamaguevo.update({posicion:pos})
  }
  }
  let mamaguevo:FirebaseObjectObservable<any>
  mamaguevo = this.db.object('vehiculos/'+key)
  mamaguevo.update({posicion:pos+1})
})
}

metodo(){
    let url = "https://optimux-a0924.firebaseio.com/vehiculos.json"
    return this._http.get(url).map(res=>{return res.json()
    })
}


}
