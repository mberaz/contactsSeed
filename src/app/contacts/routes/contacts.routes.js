"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacts_List_Component_1 = require("./../Contacts.List.Component");
var Contacts_Detail_Component_1 = require("./../Contacts.Detail.Component");
var Contact_Credits_Component_1 = require("./../Contact.Credits.Component");
var auth_guard_service_1 = require("./../RouteGuards/auth-guard.service");
var ConfirmDeactivateGuard_1 = require("../RouteGuards/ConfirmDeactivateGuard");
exports.ContactsAppRoutes = [
    { path: '', component: Contacts_List_Component_1.ContactsListComponent },
    { path: 'contacts/:id', component: Contacts_Detail_Component_1.ContactsDetailComponent },
    { path: 'info', component: Contact_Credits_Component_1.ContactsCreditsComponent, canActivate: [auth_guard_service_1.AuthGuard], data: { testNumber: 2 }, canDeactivate: [ConfirmDeactivateGuard_1.CanDeactivateGuard] }
];
//# sourceMappingURL=contacts.routes.js.map