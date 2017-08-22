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

  datosLog:any={
    user:"",
    password:""
  }

  constructor(private _loginService:LoginService, private rn:Router) {
    $(document).ready(function(){
          $(window).scrollTop(0)
    });

    this.login=new FormGroup({
      'user':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })

    if(localStorage.getItem("token")){
      this.rn.navigate(['/admin'])
    }
   }

  ngOnInit() {
    $(document).ready(function(){
          $(window).scrollTop(0)
    });
  }

  logear(){
    console.log("GG")
  }
}
