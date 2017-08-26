import { Component, OnInit } from '@angular/core';
declare var $
import {VehiculosService} from './../../../../servicios/vehiculos.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-show-vehiculo',
  templateUrl: './show-vehiculo.component.html',
  styleUrls: ['./show-vehiculo.component.css']
})
export class ShowVehiculoComponent implements OnInit {
vehiculos:any[]=[]
  constructor(private _mostrar:VehiculosService,private _router:ActivatedRoute) {
    this._router.params.subscribe(res=>{
        this._mostrar.traerDatosEditar(res['key']).subscribe(x=>{
            this.vehiculos=x
        })
    })

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
