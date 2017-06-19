"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactsService = (function () {
    function ContactsService() {
        this.contacts = [
            { name: 'Pascal Precht', id: 1 },
            { name: 'Christoph Burgdorf', id: 2 },
            { name: 'Thomas Burleson', id: 3 }
        ];
    }
    ContactsService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactsService.prototype.getContact = function (id) {
        return this.contacts.find(function (contact) { return contact.id == id; });
    };
    return ContactsService;
}());
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map