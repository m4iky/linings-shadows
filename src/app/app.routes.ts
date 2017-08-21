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

const APP_ROUTES: Routes = [
  {
    // A D M I N
    path: 'admin',
    component: AdminComponent,
    children:[

      { path: 'offers', component: OfertasAdminComponent },
      { path: 'cars', component: VehiculosAdminComponent },
      { path: 'car/:id', component: RegistroVehiculosComponent },
      { path: 'home', component: HomeAdminComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }

    ]
    },
    // ----------

  { path: 'contacts', component: ContactoComponent },
  { path: 'terms', component: CondicionesComponent },
  { path: 'home', component: InicioComponent },
  { path: 'cars', component: VehiculosComponent },
  { path: 'offers', component: OfertasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cars' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
