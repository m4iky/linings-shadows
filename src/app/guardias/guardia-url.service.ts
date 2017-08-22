import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';

@Injectable()
export class GuardiaURLService implements CanActivate{

  constructor(private _Active:Router) {}
   canActivate(){
     if(localStorage.getItem("token")){
       return true
     }else{
      this._Active.navigate(['/cars'])
       return false
     }
   }
}
