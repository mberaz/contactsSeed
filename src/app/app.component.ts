import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <contacts-app></contacts-app>`
})
export class AppComponent { name = 'Angular'; }
