import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';

@Injectable()
export class OfertasUrlService {

  constructor(private _Active:Router) {}
   canActivate(){
     if(localStorage.getItem("Ofertas")){
       return true
     }else{
      this._Active.navigate(['/cars'])
       return false
     }
   }
}
