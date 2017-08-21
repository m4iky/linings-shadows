import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

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
