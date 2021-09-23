import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [HeaderComponent],
})
export class HeaderModule {}