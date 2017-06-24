import { ContactsListComponent } from './../Contacts.List.Component';
import { ContactsDetailComponent } from './../Contacts.Detail.Component';
import { ContactsCreditsComponent } from './../Contact.Credits.Component';
import { AuthGuard } from './../RouteGuards/auth-guard.service';
import { CanDeactivateGuard } from "../RouteGuards/ConfirmDeactivateGuard";

export const ContactsAppRoutes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent },
  { path: 'info', component: ContactsCreditsComponent, canActivate: [AuthGuard], data:{testNumber:2} , canDeactivate: [CanDeactivateGuard]}
];