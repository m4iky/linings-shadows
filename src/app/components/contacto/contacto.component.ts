import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
declare var $
declare var Materialize
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

contac={
  from_name:"",
  numero:"",
  asunto:"",
  message_html:"",
  email_address:""
}
validar:FormGroup;

  constructor() { }




Contacto(){
  setTimeout(()=>{
    this.Actualizar()
  },2000)
}

  Actualizar(){
    Materialize.toast("Se ha enviado correctamente",3000,'#4caf50 green rounded')

    this.validar.reset()


  }

  ngOnInit() {
    $("#icon_prefix").focus()
    this.validar=new FormGroup({
      'from_name':new FormControl('',[Validators.required,,Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,64}")]),
      'numero':new FormControl('',[Validators.required,Validators.pattern("[0-9/-]{1,}")]),
      'asunto':new FormControl('',[Validators.required]),
      'message_html':new FormControl('',[Validators.required]),
      'email_address':new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")])

    })
  }

}
