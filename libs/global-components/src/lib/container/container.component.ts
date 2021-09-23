import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-container',
  template: `<router-outlet></router-outlet> `,
  styles: [
    `
      :host {
        display: block;
        max-width: var(--screen-width);
        padding: 1rem;
        margin: auto;
        box-sizing: border-box;
      }
    `,
  ],
})
export class ContainerComponent {}

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [ContainerComponent],
})
export class ContainerModule {}
