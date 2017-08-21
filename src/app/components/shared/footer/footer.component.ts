import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
estado:boolean = true;
  constructor() {
    // si estamos en la administracion
      if(localStorage.getItem('token')){
        this.estado = false;
      }


    //
   }

  ngOnInit() {
  }

}
