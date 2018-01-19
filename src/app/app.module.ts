import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TrajetComponent } from './trajet/trajet.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTrajetComponent } from './admin-trajet/admin-trajet.component';
import { TrajetServiceService } from './trajet-service.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FermerCompteComponent } from './fermer-compte/fermer-compte.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    InscriptionComponent,
    TrajetComponent,
    HeaderComponent,
    AdminComponent,
    AdminTrajetComponent,
    FermerCompteComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    TrajetServiceService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
