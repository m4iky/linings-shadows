import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

valida:FirebaseObjectObservable<any>

constructor(private db:AngularFireDatabase){
  let id = localStorage.getItem('id')
  let token= localStorage.getItem("token")
  let tipo = localStorage.getItem('tipo')

  this.valida=this.db.object(`usuarios/${id}`)
  this.valida.subscribe(res=>{
    if(res.token != token || res.tipo != tipo){
      localStorage.clear()
      location.href="/"
    }
  })
}
}
