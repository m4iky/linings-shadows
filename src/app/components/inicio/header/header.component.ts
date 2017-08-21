import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    this.inicializarSlide()
  }


  ngOnInit() {
      this.inicializarSlide()
  }



// Metodo para inicializar el slide
inicializarSlide(){
  $(document).ready(function(){
    $('.slider').slider({indicators:false});
    let width = $(window).width()
    if(width <= 500){$('.slider').slider({height:200});
    }else{$('.slider').slider({height:500});
    }});
}

}
