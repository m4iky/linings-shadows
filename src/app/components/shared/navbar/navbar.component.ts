import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import {LoginService} from '../../../servicios/login.service';
import {Md5} from 'ts-md5/dist/md5';
import {FormGroup, FormControl, Validators} from '@angular/forms';

declare var $;
declare var Materialize
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Md5]
})
export class NavbarComponent implements OnInit {

datos:any={

  pass1: '',
  pass2: ''
}

cambiar: FormGroup


Oferta:FirebaseObjectObservable<any>
password:any={
  password:'',
}
estado:boolean = true;
usuario:string;
// navbar

navbar:string[] = [
  'Inicio',
  'Cars',
  'Offers',
  'Terms',
  'Contacts',
  // titulo
  'RobertoMotors.com',

  // admin
  ''
]

estadoOfertas:boolean=false


  constructor(private db:AngularFireDatabase, private _loginService : LoginService) {
    //VALIDACION
    this.cambiar=new FormGroup({ // validacion de lso input
      'pass1':new FormControl('', [Validators.required, Validators.minLength(6)]),
      'pass2':new FormControl('', [Validators.required, Validators.minLength(6)])

    })



    // MODAL CAMBIAR CONTRASENA
        $(document).ready(function(){
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal();
          });

    this.usuario = localStorage.getItem('nombre')
    this.navbar[6] = localStorage.getItem('nombre')
    // si estamos en la administracion
      if(localStorage.getItem('token')){
        this.estado = false;
      }


    //
    $(document).ready(function(){
      $(".button-collapse").sideNav();
    })

    //Ofertas == 2
    const queryObservable = db.list('/vehiculos', {
  query: {
    orderByChild: 'estado',
    equalTo: 2
  }
}).subscribe(gg=>{
  if(gg.length>0){
    this.estadoOfertas=true
  }
});

  }

  ngOnInit() {
    // MODAL CAMBIAR CONTRASENA
        $(document).ready(function(){
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal();
          });

          const queryObservable = this.db.list('/vehiculos', {
        query: {
          orderByChild: 'estado',
          equalTo: 2
        }
      }).subscribe(gg=>{
        if(gg.length>0){
          this.estadoOfertas=true
        }

      });


  }

      cambiarpass(objeto){
        console.log(objeto)



        if(this.datos.pass1 == this.datos.pass2){



        let contra2 =  Md5.hashStr(this.datos.pass1)


        this.password.password = contra2

          this._loginService.cambiarpass(this.password)
          this.datos= ''
          Materialize.toast("Contraseña modificada",3000,'rounded')
        }else{
          Materialize.toast("Las contraseñas no coinciden",3000,'rounded')
        }

      }

}

$(document).ready(function(){

  $(window).scroll(function(){

      var barra = $(this).scrollTop()

      if(barra > 100){

          $('.navbar-fixeds').css('top','0')

      }else{

          $('.navbar-fixeds').css('top','-100px')

      }

})
})
