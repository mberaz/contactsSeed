import { Component, OnInit } from '@angular/core';

import { ContactsService } from './contacts.service';
import { Contact } from './contact';
import { ActivatedRoute, RouterStateSnapshot, RouterState, Router } from '@angular/router';


@Component({
    selector: 'contacts-credits',
    template: `
    <h2>Contacts app</h2>
  <h4>Michael berezin</h4>
  `,

})
export class ContactsCreditsComponent implements OnInit {
    page: string;
    activatedRoute: ActivatedRoute

    constructor(private contactsService: ContactsService, router: Router, activatedRoute: ActivatedRoute) {
        const state: RouterState = router.routerState;
        const snapshot: RouterStateSnapshot = state.snapshot;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.page = this.activatedRoute.snapshot.queryParams["page"];
    }
    canDeactivate(): Promise<boolean> | boolean {
        return this.page === '1';
    }
}