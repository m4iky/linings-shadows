import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/Rx';
declare var Materialize
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
    this.Oferta.update({
        estado:1,
        descripcionOfer:"",
        precioOfer:"",
      })
  }

  traerOferta(id){
    let Oferta:FirebaseObjectObservable<any>
      return this.Oferta=this.db.object(`vehiculos/${id}`)
  }

  modificarOferta(id,objeto){
    this.Oferta=this.db.object(`vehiculos/${id}`)
    this.Oferta.update({
      descripcionOfer:objeto.descripcionOfer,
      precioOfer:objeto.precioOfer,
    })
    Materialize.toast("La oferta se modifico  correctamente",3000,'#4caf50 green rounded')
  }

}
