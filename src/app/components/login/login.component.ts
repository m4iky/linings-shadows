import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

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

  constructor() {
    $(document).ready(function(){
          $(window).scrollTop(0)
    });

    this.login = new FormGroup({
      'user':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })
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
