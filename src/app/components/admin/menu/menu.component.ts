import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
usuario:string;
  constructor() {
    this.usuario = localStorage.getItem('nombre')
   }

  cerrarSession(){
    localStorage.clear()
    location.href="/"
  }
  ngOnInit() {
  }

}
