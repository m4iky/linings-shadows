import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class LoginService {
  url:string="https://optimux-a0924.firebaseio.com/usuarios.json"

  constructor(private http:Http) { }

  logear(datos){
    this.getUsuario().subscribe(usu=>{

    })
  }


  getUsuario(){
    return this.http.get(this.url).map(usu=>{
      return usu.json()
    })
  }

  randomToken(min, max){

  }

}
