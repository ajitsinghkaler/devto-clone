import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {}

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [ContainerComponent],
})
export class ContainerModule {}
