import { Component } from '@angular/core';

@Component({
  selector: 'app-listings',
  template: `<app-listings-header></app-listings-header>
    <main>
      <app-listings-sidenav></app-listings-sidenav>
      <div>
        <router-outlet></router-outlet>
      </div>
    </main> `,
  styles: [
    `
      main {
        padding-top: 1rem;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 240px 1fr;
      }
    `,
  ],
})
export class ListingsComponent {}
