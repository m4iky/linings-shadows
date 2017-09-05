import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginService} from '../../servicios/login.service'
import {Router} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

declare var Materialize
declare var $
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Md5]
})
export class LoginComponent implements OnInit {

  login:FormGroup

  datosLog:any={ /// objeto
    user:"",
    password:""
  }

  constructor(private _loginService:LoginService, private rn:Router) {
    $(document).ready(function(){
          $(window).scrollTop(0)
    });

    this.login=new FormGroup({ // validacion de lso input
      'user':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })

   }




  ngOnInit() {
    $("#user").focus()
    $(document).ready(function(){
          $(window).scrollTop(0)
    });


    
  }

  logear(){ // funcion que se llama en el submit
    let pass =  Md5.hashStr(this.datosLog.password)

    this._loginService.logear(this.datosLog, pass)
  }
}
