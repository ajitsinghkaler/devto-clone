import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-sidebar></app-sidebar>
    <app-article-container></app-article-container>
    <app-rightbar-container></app-rightbar-container>`,
  styles: [
    `
      :host {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 240px 2fr 1fr;
      }
    `,
  ],
})
export class HomeComponent {}
