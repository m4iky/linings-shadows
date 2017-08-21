import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-show-vehiculos',
  templateUrl: './show-vehiculos.component.html',
  styleUrls: ['./show-vehiculos.component.css']
})
export class ShowVehiculosComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
$('.tooltipped').tooltip({delay: 50});
});
   }

  ngOnInit() {

    $(document).ready(function(){
   $('.tooltipped').tooltip({delay: 50});
 });
  }

}
