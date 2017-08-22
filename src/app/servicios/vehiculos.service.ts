import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import * as firebase from 'firebase';

declare var $
@Injectable()
export class VehiculosService {
  url:string='https://optimux-a0924.firebaseio.com/vehiculos.json';
  constructor(private _http: Http, private db: AngularFireDatabase) { }


  registrar(data){


    return  this._http.post(this.url,data).map(res=>{
      console.log(res.json())
      return res.json()
    }).subscribe()


  }
  guardarimg(data, key){
    for(let i = 1; i<=4; i++){

      // Referencias
      let storage = firebase.storage().ref('vehiculos')
      let database:FirebaseListObservable<any[]>
      database=this.db.list(`/vehiculos/${key}`)

        let imagen= $('.img'+i).get(0).files[0]

        storage.child(imagen.name).put(imagen).then(function(){
        storage.child(imagen.name).getDownloadURL().then(url=>{

        })
      })
     }
  }


}
