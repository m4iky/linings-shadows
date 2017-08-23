import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx'
import {Md5} from 'ts-md5/dist/md5';

declare var $
@Injectable()
export class LoginService {
  url="https://optimux-a0924.firebaseio.com/usuarios.json"

  constructor(private http:Http, private rn:Router) { }

  error:boolean=false
  logear(datos, pass){ /// funcion logear con los parametros para el objeto
    this.getUsuario().subscribe(usu=>{  /// disparador del map

      let session:boolean=false;
      let id:string;
      let nombre:string;
      let tipo:string;

      for(let key in usu){ /// for en la x cantidad de usuarios que llegan

        if(usu[key].usuario == datos.user && usu[key].password==pass){ // condicional para verificar si existe el usuario
          session=true /// si existe el usuario el estado de session es true
          tipo=usu[key].tipo //se guarda el tipo de usuario en la variable
          nombre=usu[key].nombre
          id=key

        }else{
        }
      }

      if(session){ /// condicion de si session es verdadera
        let token:any = this.randomToken(99999,99999999) // se crea una variable y se le llama la funcion token obtorgandole un token
        localStorage.setItem('nombre',nombre) /// se guarda el valor del nombre en el localStorage Por el nombre de nombre del usuario
        localStorage.setItem('token',token) /// se guarda el valor del token en el localStorage Por el nombre de token
        localStorage.setItem('tipo',tipo) /// se guarda el valor del tipo en el localStorage Por el nombre de tipo
        localStorage.setItem('id',id) /// se guarda el valor del tipo en el localStorage Por el nombre de tipo

        this.actualizarToken(id,token).subscribe(x=>{ // llamando la funcion de actualizarToken asignadole el id que se modificara y el valor a modificiar
          location.href='/admin' ///se redirecciona el usuario al final si ha cumplido todo y actualizandole el valor del token
        })
      }else{
        this.error=true // ni idea porque le puso valor buleano ya que es obvio que funciono nada dara error xD
        if(this.error){
          $('.username').focus()
        }
      }
    })
  }

  actualizarToken(id, token){ // actualizacion del token
    return this.http.put(`https://optimux-a0924.firebaseio.com/usuarios/${id}/token.json`,token).map(actToken=>{ // se mantiene a la espera de los posibles datos  y actualizacion del token segun el usuario logueado
      return actToken.json() /// retornacion de los datos en forma de json
    })
  }
  getUsuario(){
    return this.http.get(this.url).map(usu=>{ //// busca todos los usuarios mediante el metodo http(get) y se mantiene a la espera de los posibles datos
      return usu.json() /// retornacion de los datos en forma de json
    })
  }

  randomToken(min, max){ /// rando de x cantidad de numero hasta x cantidad
    return Math.floor(Math.random() * (max - min + 1) + min); // math.floor redondea los numeros decimales a un entero
    ///(Math.random() * (max - min + 1) + min) --- saca un random de numero mediante la reta de max - min suamndole  para al final sumandole nuevamente el numero min
  }

}
