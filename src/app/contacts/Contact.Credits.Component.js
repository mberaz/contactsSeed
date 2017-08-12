"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var router_1 = require("@angular/router");
var ContactsCreditsComponent = (function () {
    function ContactsCreditsComponent(contactsService, router, activatedRoute) {
        this.contactsService = contactsService;
        var state = router.routerState;
        var snapshot = state.snapshot;
        this.activatedRoute = activatedRoute;
    }
    ContactsCreditsComponent.prototype.ngOnInit = function () {
        this.page = this.activatedRoute.snapshot.queryParams["page"];
    };
    ContactsCreditsComponent.prototype.canDeactivate = function () {
        return this.page === '1';
    };
    return ContactsCreditsComponent;
}());
ContactsCreditsComponent = __decorate([
    core_1.Component({
        selector: 'contacts-credits',
        template: "\n    <h2>Contacts app</h2>\n  <h4>Michael berezin</h4>\n  ",
    }),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService, router_1.Router, router_1.ActivatedRoute])
], ContactsCreditsComponent);
exports.ContactsCreditsComponent = ContactsCreditsComponent;
//# sourceMappingURL=Contact.Credits.Component.js.map