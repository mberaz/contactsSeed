import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from './contacts.service';
import { Contact } from './contact';

@Component({
  selector: 'contacts-detail',
  template: `
  <h1 style="color:red;"> Contact </h1>
    <h2>{{contact.name}}</h2>
  `
})
export class ContactsDetailComponent implements OnInit { 
contact:Contact;
  constructor(private contactsService: ContactsService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    var data=this.route.snapshot.params;
    this.contact = this.contactsService.getContact(data.id);
  }
}