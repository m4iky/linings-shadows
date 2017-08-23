import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// R U T A S
import {APP_ROUTING} from './app.routes';

// M A T E R I A L I Z E
import { MaterializeModule } from 'angular2-materialize';
//ANGULAR FIRE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// C O M P O N E N T E S
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { SlideComponent } from './components/vehiculos/slide/slide.component';
import { ShowVehiculosComponent } from './components/vehiculos/show-vehiculos/show-vehiculos.component';
import { PaginacionComponent } from './components/vehiculos/paginacion/paginacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/inicio/header/header.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ImagenComponent } from './components/inicio/imagen/imagen.component';
import { ExclusivosComponent } from './components/inicio/exclusivos/exclusivos.component';
import { ShowVehiculoComponent } from './components/vehiculos/show-vehiculos/show-vehiculo/show-vehiculo.component';
import { CondicionesComponent } from './components/condiciones/condiciones.component';
import { OfertComponent } from './components/inicio/ofert/ofert.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AdminComponent } from './components/admin/admin.component';
import { DropComponent } from './components/shared/navbar/drop/drop.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { ContenidoComponent } from './components/admin/contenido/contenido.component';
import { OfertasAdminComponent } from './components/admin/contenido/ofertas-admin/ofertas-admin.component';
import { VehiculosAdminComponent } from './components/admin/contenido/vehiculos-admin/vehiculos-admin.component';
import { HomeAdminComponent } from './components/admin/contenido/home-admin/home-admin.component';
import { RegistroVehiculosComponent } from './components/admin/contenido/vehiculos-admin/registro-vehiculos/registro-vehiculos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
 // S E R V I C I O S
import {VehiculosService} from './servicios/vehiculos.service';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from './servicios/login.service';
import {GuardiaURLService} from './guardias/guardia-url.service';
import {LoginUrlService} from './guardias/login-url.service';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import {OfertasService} from './servicios/ofertas.service';
import { ModalOfertaComponent } from './components/admin/contenido/ofertas-admin/modal-oferta/modal-oferta.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VehiculosComponent,
    SlideComponent,
    ShowVehiculosComponent,
    PaginacionComponent,
    InicioComponent,
    OfertasComponent,
    HeaderComponent,
    ImagenComponent,
    ExclusivosComponent,
    ShowVehiculoComponent,
    CondicionesComponent,
    OfertComponent,
    ContactoComponent,
    AdminComponent,
    DropComponent,
    MenuComponent,
    ContenidoComponent,
    OfertasAdminComponent,
    VehiculosAdminComponent,
    HomeAdminComponent,
    RegistroVehiculosComponent,
    LoginComponent,
    CapitalizarPipe,
    ModalOfertaComponent
  ],
  imports: [
    APP_ROUTING,
    MaterializeModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [VehiculosService,LoginService,GuardiaURLService, LoginUrlService,OfertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
