import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../../../../servicios/ofertas.service'
declare var $

@Component({
  selector: 'app-ofertas-admin',
  templateUrl: './ofertas-admin.component.html',
  styleUrls: ['./ofertas-admin.component.css']
})
export class OfertasAdminComponent implements OnInit {

    constructor(private _Ofers:OfertasService) {
      this._Ofers.mostrarOfertas()
      this.inicializarAuto()
    }

  ngOnInit() {
    this._Ofers.mostrarOfertas()
    this.inicializarAuto()

  }











// metodo para inicializar el autocompletado
inicializarAuto(){
  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
data: {
  "Apple": null,
  "Microsoft": null,
  "Google": 'https://placehold.it/250x250'
},
limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
onAutocomplete: function(val) {
  // Callback function when value is autcompleted.
},
minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
  })
}
}
