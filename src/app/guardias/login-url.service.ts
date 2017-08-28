import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
@Injectable()
export class LoginUrlService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/admin/home'])
      return false
    }else{
      return true
      
    }
  }
}
