import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import * as firebase from 'firebase';

declare var $
@Injectable()
export class VehiculosService {
  vehiculo:FirebaseListObservable<any>
  vehiculos:FirebaseObjectObservable<any[]>;
  url:string='https://optimux-a0924.firebaseio.com/vehiculos.json';
  constructor(private _http: Http, private db: AngularFireDatabase) { }


  registrar(data){

    return  this._http.post(this.url,data).map(res=>{

      // this.guardarimg(res.json())
      return res.json()
    })

  }
  guardar(data){
    this.registrar(data).subscribe(key=>{
      this.guardarimg(key.name)
    })
  }
  guardarimg(key){

    let random = this.Random(999, 9999)

    let estado=false;
       let array=[]=[];
          for (var i=1;i<4;i++){
            array[i]=$("#imagen"+i).val()
              if(array[i]==""){
                estado=false

              }else{
                estado=true
              }
          }

      if(estado == true){


    for(let i = 1; i<=4; i++){

      // Referencias
      let storage = firebase.storage().ref('vehiculos')
      let database:FirebaseObjectObservable<any[]>
      database=this.db.object(`/vehiculos/${key}`)

        let imagen= $('.img'+i).get(0).files[0]
        let name1 = imagen.name.replace(/\s/g, "")
        name1=name1+random
        storage.child(name1).put(imagen).then(function(){
        storage.child(name1).getDownloadURL().then(url=>{
          let objeto = eval('[{url'+i+':"'+url+'"}]')

            database.update(objeto[0])
        })
      })
    }// FIN CICLO FOR

  }else{
    alert("Debe seleccionar 4 imagenes.")
  }

  }
  Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


    mostrarVehiculos(){
      this.vehiculo=this.db.list('vehiculos')
    }

}
