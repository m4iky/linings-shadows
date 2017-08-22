import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() {

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    if(localStorage.getItem('token')){
      $(document).ready(function(){
        let h = $(window).height() - 106
        $('.row > div').css('height',h+'px')
      })
    }
  }

  ngOnInit() {
    $(document).ready(function(){
$('.collapsible').collapsible();
});

    if(localStorage.getItem('token')){
      $(document).ready(function(){
        let h = $(window).height() - 106
        $('.row > div').css('height',h+'px')
      })
    }
  }

}
  if(localStorage.getItem('token')){
$(window).resize(function(){
  let h = $(window).height() - 106
  $('.row > div').css('height',h+'px')
})
}
