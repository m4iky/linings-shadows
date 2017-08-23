import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/Rx';
@Injectable()
export class OfertasService {

  Ofertas:FirebaseListObservable<any[]>;
  Oferta:FirebaseObjectObservable<any>
  constructor(private db:AngularFireDatabase) { }


  mostrarOfertas(){
    this.Ofertas=this.db.list('vehiculos')
  }

  eliminarOfertas(key){
    this.Oferta=this.db.object(`vehiculos/${key}`)
    this.Oferta.update({estado:1})
  }
}
