import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {VehiculosService} from '../../../../../servicios/vehiculos.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';

declare var $
@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent implements OnInit {
  vehiculos:any={
    marca: '1',
    modelo: '2',
    precio: '3',
    descripcion: '4',
    estado: 1,
    url1:'',
    url2:'',
    url3:''
  }
  imagenes:FirebaseListObservable<any>
  constructor(private db:AngularFireDatabase, private _vehiculosService: VehiculosService) {

    this.imagenes= this.db.list('/vehiculos')
   }
   guardar(){
     this._vehiculosService.registrar(this.vehiculos)

    //  let datos= this.vehiculos
    //  let urlfor:string;
    //  let servicio = this._vehiculosService
     //SUBIR IMAGENES
  //   for(let i = 1; i<=4; i++){
   //
  //   // Referencias
  //   let storage = firebase.storage().ref('vehiculos')
  //   let database:FirebaseListObservable<any[]>
  //   database=this.db.list('/vehiculos')
  //     let imagen= $('.img'+i).get(0).files[0]
  //     storage.child(imagen.name).put(imagen).then(function(){
  //     storage.child(imagen.name).getDownloadURL().then(url=>{
  //       datos.url1=url
  //       servicio.registrar(datos)
  //     })
  //   })
  //  }

}



  ngOnInit() {
  }

}
