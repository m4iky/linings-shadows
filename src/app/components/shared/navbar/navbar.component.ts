import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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


  constructor() {
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
