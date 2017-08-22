import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginService} from '../../servicios/login.service'
import {Router} from '@angular/router';

declare var $
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
    $(document).ready(function(){
          $(window).scrollTop(0)
    });
  }

  logear(){ // funcion que se llama en el submit
    this._loginService.logear(this.datosLog)
  }
}
