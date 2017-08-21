import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-show-vehiculo',
  templateUrl: './show-vehiculo.component.html',
  styleUrls: ['./show-vehiculo.component.css']
})
export class ShowVehiculoComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
$('.modal').modal();
});
  }

  ngOnInit() {
    $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

    $(document).ready(function(){
    $('ul.tabs').tabs();
  });


   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
   $('.modal').modal();

  }

}
