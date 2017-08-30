import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import {VehiculosService} from '../../../../../servicios/vehiculos.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';
import {ActivatedRoute} from '@angular/router';
declare var $
@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent implements OnInit {

  vehiculos:any={
    marca: '',
    modelo: '',
    precio: '',
    descripcion: '',
    estado: 1,
    posicion:'',
    img1:'',
    img2:'',
    img3:'',
    img4:'',
    url1:'',
    url2:'',
    url3:'',
    url4:''
  }

  validar:FormGroup;
  Estado:string="registrar";
  parametro:any;
  imagenes:FirebaseListObservable<any>
  editar:boolean=false;
  constructor(private _http: Http, private db:AngularFireDatabase, private _vehiculosService: VehiculosService,private _key:ActivatedRoute) {
    this.ultimo()

    $("#icon_prefix").focus()

    if(localStorage.getItem('token')){
      $(document).ready(function(){
        let h = $(window).height() - 106
        $('.base_reg').css('height',h+'px')
      })
    }

    this._key.params.subscribe(res=>{
      this.parametro=res['id']
      if(this.parametro!="registrar"){
        this.Estado="Editar";
        this.editar=true;
          this._vehiculosService.traerDatosEditar(this.parametro).subscribe(x=>{
              this.vehiculos=x
          })
      }

    })
    this.imagenes= this.db.list('/vehiculos')
   }


   guardar(){
       if(this.parametro=="registrar"){

         setTimeout(()=>{
             this._vehiculosService.guardar(this.vehiculos)
         },80)

     }else{
       this._vehiculosService.modificar(this.parametro,this.vehiculos)
     }
   }

   ultimo(){
     if(this.parametro=="registrar"){
        this._http.get('https://optimux-a0924.firebaseio.com/vehiculos.json').map(res=>{
          return res.json()

        }).subscribe(ok=>{
          let mayor=0
          for(let a in ok){
              if(ok[a].posicion > mayor){
                mayor = ok[a].posicion
              }
            
          }
          this.vehiculos.posicion = mayor+1


        })



    //  let ultimo:FirebaseListObservable<any[]>;
    //  ultimo = this.db.list('/vehiculos',{
    //     query:{
    //       orderByChild:'posicion',
    //       limitToLast: 1
    //     }
    //   });
     //
     //
     //
    //  ultimo.subscribe(res=>{
      //  let posicion
        // for (let a in res){
        //  posicion=res[a].posicion
        // }
      //   console.log(res)
      //  this.vehiculos.posicion=res[0].posicion+1




   }



   }
  ngOnInit() {
    this.ultimo()
    $("#icon_prefix").focus()
    this.validar=new FormGroup({
      'marca': new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
      'modelo': new FormControl('',[Validators.required]),
      'precio': new FormControl('',[Validators.required,Validators.pattern("[0-9]{1,}")]),
      'descripcion': new FormControl('',[Validators.required])
})

  }

}

if(localStorage.getItem('token')){
$(window).resize(function(){
let h = $(window).height() - 106
  $('.base_reg').css('height',h+'px')
})
}
