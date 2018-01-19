import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core/src/metadata/directives';
import { AdminComponent } from './admin/admin.component';
import { AdminTrajetComponent } from './admin-trajet/admin-trajet.component';
import { FermerCompteComponent } from './fermer-compte/fermer-compte.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
    outlet: 'home'
  },
  {
    path: 'auth',
    component: AuthComponent,
    outlet: 'authentification'
  },
  {
    path: 'ins',
    component: InscriptionComponent,
    outlet: 'inscription'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/users',
    component: FermerCompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
