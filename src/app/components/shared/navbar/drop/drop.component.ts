import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {

  constructor() {
     $('.dropdown-button').dropdown('open');
  }

  ngOnInit() {
     $('.dropdown-button').dropdown('open');
  }

}
