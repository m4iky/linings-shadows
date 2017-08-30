import { Component, OnInit } from '@angular/core';

declare var $
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() {
// // MODAL CAMBIAR CONTRASENA
//     $(document).ready(function(){
//         // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
//         $('.modal').modal();
//       });




    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    if(localStorage.getItem('token')){
      $(document).ready(function(){
        let h = $(window).height() - 106
        $('.base_pr > div').css('height',h+'px')
      })
    }
  }

  ngOnInit() {
  //   $(document).ready(function(){
  //   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  //   $('.modal').modal();
  // });


    $(document).ready(function(){
$('.collapsible').collapsible();
});

    if(localStorage.getItem('token')){
      $(document).ready(function(){
        let h = $(window).height() - 106
        $('.base_pr > div').css('height',h+'px')
      })
    }
  }

}
  if(localStorage.getItem('token')){
$(window).resize(function(){
  let h = $(window).height() - 106
  $('.base_pr > div').css('height',h+'px')
})
}
