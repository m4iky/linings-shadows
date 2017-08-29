import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

vehiculos:FirebaseListObservable<any[]>;
cant = 0;
select = "";
  constructor(private db:AngularFireDatabase) {
          this.vehiculos = db.list('vehiculos')

  }
  sele(key){
    this.select = key
  }
  ngOnInit(){
    this.vehiculos.subscribe(res =>{
      if(this.select == ""){
        this.select = res[0].$key
      }
      this.cant = res.length-1
      
    })
  }
subir(key){

}
}
