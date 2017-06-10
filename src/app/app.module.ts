import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'pizzeria'),
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  declarations: [ AppComponent, SucursalesComponent, EmpleadosComponent, LoginComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}