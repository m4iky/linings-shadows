import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../../../../servicios/vehiculos.service'
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
declare var Materialize
declare var $
@Component({
  selector: 'app-vehiculos-admin',
  templateUrl: './vehiculos-admin.component.html',
  styleUrls: ['./vehiculos-admin.component.css']
})
export class VehiculosAdminComponent implements OnInit {
vehiculos:FirebaseListObservable<any>
  constructor(private _Vehiculos:VehiculosService,private db:AngularFireDatabase) {
    



    this._Vehiculos.mostrarVehiculos()

   }

  ngOnInit() {

    this._Vehiculos.mostrarVehiculos()
      this.inicializarAuto()
  }

  eliminar(key){
    if (confirm('¿Desea eliminar este vehiculo?')) {
      this._Vehiculos.eliminar(key)
      Materialize.toast("Vehiculo eliminado correctamente", 3000,'#d50000 red accent-4 rounded')
    }


  }

encontrar(buscar){

    this._Vehiculos.buscadorTiempoReal(buscar)
  }


  // metodo para inicializar el autocompletado
  inicializarAuto(){
    let nombre = new Object()
    this.vehiculos=this.db.list('vehiculos')
    this.vehiculos.subscribe(res=>{
          for (let i in res){
                nombre[res[i].marca]=null
          }

          $(document).ready(function(){
            $('input.autocompleteVeh').autocomplete({
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


}
