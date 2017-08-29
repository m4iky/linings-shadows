import { Component, OnInit } from '@angular/core';
import {VehiculosService} from './../../../servicios/vehiculos.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {PaginacionService} from './../../../servicios/paginacion.service';
declare var $
@Component({
  selector: 'app-show-vehiculos',
  templateUrl: './show-vehiculos.component.html',
  styleUrls: ['./show-vehiculos.component.css']
})
export class ShowVehiculosComponent implements OnInit {
//propiedades para paginacion
asincronico:FirebaseListObservable<any[]>
private allItems: any[];
pager:any = {}
pagedItems: any[];
//fin propiedades


  constructor(private _mostrarVehiculos:VehiculosService,private db:AngularFireDatabase,private paginacionService:PaginacionService) {




    $(document).ready(function(){
$('.tooltipped').tooltip({delay: 50});
});

   }
  ngOnInit() {
    //paginacion
    this.asincronico = this.db.list('vehiculos',{
      query:{
        orderByChild:'posicion'
      }
    });
    this.asincronico.subscribe(res =>{
      this.allItems = res
      this.setPage(1)
    })
    //fin paginacion
    this._mostrarVehiculos.mostrarVehiculos()
    $(document).ready(function(){
   $('.tooltipped').tooltip({delay: 50});
 });
  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.paginacionService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
