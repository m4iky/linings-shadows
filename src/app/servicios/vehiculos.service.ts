import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class VehiculosService {

  constructor(private _http: Http) { }


  registrar(data){
    this._http.post(this.url, data).map(res=>{
      return res.json
    })
  }
}
