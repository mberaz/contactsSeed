import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsAppComponent } from './Contacts.App.Component';
import { ContactsListComponent } from './contacts/Contacts.List.Component';
import { ContactsDetailComponent } from './contacts/Contacts.Detail.Component';
import { ContactsAppRoutes } from './contacts/routes/contacts.routes.js';
import { ContactsService } from './contacts/contacts.service';
import { ContactsCreditsComponent } from './contacts/Contact.Credits.Component'
import { AuthGuard } from './contacts/RouteGuards/auth-guard.service';
import {CanDeactivateGuard} from './contacts/RouteGuards/ConfirmDeactivateGuard';
 

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
  ],
  declarations: [
    AppComponent,
    ContactsAppComponent,
    ContactsDetailComponent,
    ContactsListComponent,
    ContactsCreditsComponent],
  providers: [
    ContactsService,
    AuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
