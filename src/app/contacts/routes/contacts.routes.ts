import { ContactsListComponent } from './../Contacts.List.Component';
import { ContactsDetailComponent } from './../Contacts.Detail.Component';

export const ContactsAppRoutes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent }
];