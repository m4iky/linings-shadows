import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

Oferta:FirebaseObjectObservable<any>

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


  constructor(db:AngularFireDatabase) {
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
