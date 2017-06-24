"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacts_List_Component_1 = require("./../Contacts.List.Component");
var Contacts_Detail_Component_1 = require("./../Contacts.Detail.Component");
var Contact_Credits_Component_1 = require("./../Contact.Credits.Component");
exports.ContactsAppRoutes = [
    { path: '', component: Contacts_List_Component_1.ContactsListComponent },
    { path: 'contacts/:id', component: Contacts_Detail_Component_1.ContactsDetailComponent },
    { path: 'info', component: Contact_Credits_Component_1.ContactsCreditsComponent, canActivate: [AuthGuard], }
];
//# sourceMappingURL=contacts.routes.js.map