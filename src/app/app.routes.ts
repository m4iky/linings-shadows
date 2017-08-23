import { RouterModule, Routes } from '@angular/router';

// V E H I C U L O S
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

// I N I C I O
import { InicioComponent } from './components/inicio/inicio.component';

// O F E R T A S
import { OfertasComponent } from './components/ofertas/ofertas.component';

// C O N D I C I O N E S
import { CondicionesComponent } from './components/condiciones/condiciones.component';

// C O N T A C T O
import { ContactoComponent } from './components/contacto/contacto.component';

// A D M I N I S T R A C I O N
import { AdminComponent } from './components/admin/admin.component';
        // C H I L D  =>  V E H I C U L O S
        import {VehiculosAdminComponent} from './components/admin/contenido/vehiculos-admin/vehiculos-admin.component';
                //Registrar los vehiculos
                import {RegistroVehiculosComponent} from './components/admin/contenido/vehiculos-admin/registro-vehiculos/registro-vehiculos.component';

        // C H I L D  =>  O F E R T A S
        import {OfertasAdminComponent} from './components/admin/contenido/ofertas-admin/ofertas-admin.component';
        // C H I L D  =>  H O M E
        import {HomeAdminComponent} from './components/admin/contenido/home-admin/home-admin.component';


// L O G I N
import {LoginComponent} from './components/login/login.component';

//G U A R D I A S
import {GuardiaURLService} from './guardias/guardia-url.service';
import {LoginUrlService} from './guardias/login-url.service';

const APP_ROUTES: Routes = [
  {
    // A D M I N
    path: 'admin',
    component: AdminComponent,
    children:[
      { path: 'offers/:key', component: OfertasAdminComponent,canActivate:[GuardiaURLService] },
      { path: 'offers', component: OfertasAdminComponent,canActivate:[GuardiaURLService] },
      { path: 'cars', component: VehiculosAdminComponent,canActivate:[GuardiaURLService] },
      { path: 'car/:id', component: RegistroVehiculosComponent,canActivate:[GuardiaURLService] },
      { path: 'home', component: HomeAdminComponent,canActivate:[GuardiaURLService] },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }

    ]
    },
    // ----------

  { path: 'login', component: LoginComponent, canActivate:[LoginUrlService] },
  { path: 'contacts', component: ContactoComponent },
  { path: 'terms', component: CondicionesComponent },
  { path: 'home', component: InicioComponent },
  { path: 'cars', component: VehiculosComponent },
    { path: 'cars/:key', component: VehiculosComponent },
  { path: 'offers', component: OfertasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cars' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
