import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

declare var $
@Injectable()
export class VehiculosService {
  vehiculo:FirebaseListObservable<any>
  vehiculos:FirebaseObjectObservable<any[]>;
  url:string='https://optimux-a0924.firebaseio.com/vehiculos.json';
  constructor(private _http: Http, private db: AngularFireDatabase,private _Router:Router) { }


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

    let estado=0;
       let array:any[]=[];
          for (let a=1;a<=4;a++){
            array[a-1]=$(".img"+a).val()
              if(array[a-1]==""){

                  estado--;

              }else{
                estado++

              }
          }


      if(estado==4){


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

      alert("Vehiculos subidos correctamente")
      this._Router.navigate(['/admin','cars'])
  }

  else{
    let database1:FirebaseObjectObservable<any[]>
    database1=this.db.object(`/vehiculos/${key}`)
    database1.remove()
    alert("Debe seleccionar 4 imagenes.")
  }

  }
  Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


    mostrarVehiculos(){
      this.vehiculo=this.db.list('vehiculos')
    }

    traerDatosEditar(key){
      let vehiculo:FirebaseObjectObservable<any>
    return  vehiculo=this.db.object(`vehiculos/${key}`)
    }

}
