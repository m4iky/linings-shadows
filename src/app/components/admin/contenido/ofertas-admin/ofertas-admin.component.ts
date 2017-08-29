import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../../../../servicios/ofertas.service'
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
declare var $

@Component({
  selector: 'app-ofertas-admin',
  templateUrl: './ofertas-admin.component.html',
  styleUrls: ['./ofertas-admin.component.css']
})
export class OfertasAdminComponent implements OnInit {
Ofertas:FirebaseListObservable<any>
cambio:any;
    constructor(private _Ofers:OfertasService,private db:AngularFireDatabase) {
      this._Ofers.mostrarOfertas()


    }

  ngOnInit() {
    this._Ofers.mostrarOfertas()
    this.inicializarAuto()
    $('.autocomplete').focus()
  }











// metodo para inicializar el autocompletado
inicializarAuto(){
  let nombre = new Object()
  this.Ofertas= this.db.list('vehiculos', {
  query: {
    orderByChild: 'estado',
    equalTo: 2
  }
});
this.Ofertas.subscribe(res=>{

  for(let i in res){
      nombre[res[i].marca]=null


  }

  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
data: nombre,
limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
onAutocomplete: function(val) {
  // Callback function when value is autcompleted.
},
minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
  })


})

}

encontrar(objeto){

  this._Ofers.buscador(objeto)
}

}
