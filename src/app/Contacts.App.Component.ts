import { Component } from "@angular/core";

@Component({
  selector: 'contacts-app',
  template: `
    <h1>Contacts App</h1>
 <ul>
      <li><a [routerLink]="['/']">Contact List</a></li>
    </ul>
   <router-outlet></router-outlet>
  `
})
export class ContactsAppComponent {

}