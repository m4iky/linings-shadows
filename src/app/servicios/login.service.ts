import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx'

@Injectable()
export class LoginService {
  url:string="https://optimux-a0924.firebaseio.com/usuarios.json"

  constructor(private http:Http, private rn:Router) { }

  error:boolean=false
  logear(datos){
    this.getUsuario().subscribe(usu=>{

      let session:boolean=false;
      let id:string;
      let nombre:string;
      let tipo:string;

      for(let key in usu){
        if(usu[key].user==datos.user && usu[key].password==datos.password){
          session=true
          tipo=usu[key].tipo
          break
        }
      }

      if(session){
        let token:any = this.randomToken(99999,99999999)
        localStorage.setItem('tokem',token)
        localStorage.setItem('tipo',tipo)
        localStorage.setItem('nombre',nombre)

        this.actualizarToken(id,token).subscribe(gg=>{
          this.rn.navigate(['/admin'])
        })
      }else{
        this.error=true
      }
    })
  }

  actualizarToken(id, token){
    return this.http.put(`https://optimux-a0924.firebaseio.com/usuarios${id}/token.json`,token).map(actToken=>{
      return actToken.json()
    })
  }
  getUsuario(){
    return this.http.get(this.url).map(usu=>{
      return usu.json()
    })
  }

  randomToken(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
