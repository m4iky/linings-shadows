import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class VehiculosService {
  url:string='https://optimux-a0924.firebaseio.com/vehiculos.json'
  constructor(private _http: Http) { }


  registrar(data){
    this._http.post(this.url, data).map(res=>{
      return res.json
    })
  }
}
