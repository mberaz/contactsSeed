"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var Contacts_App_Component_1 = require("./Contacts.App.Component");
var Contacts_List_Component_1 = require("./contacts/Contacts.List.Component");
var Contacts_Detail_Component_1 = require("./contacts/Contacts.Detail.Component");
var contacts_routes_js_1 = require("./contacts/routes/contacts.routes.js");
var contacts_service_1 = require("./contacts/contacts.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(contacts_routes_js_1.ContactsAppRoutes),
        ],
        declarations: [
            app_component_1.AppComponent,
            Contacts_App_Component_1.ContactsAppComponent,
            Contacts_Detail_Component_1.ContactsDetailComponent,
            Contacts_List_Component_1.ContactsListComponent
        ],
        providers: [
            contacts_service_1.ContactsService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map