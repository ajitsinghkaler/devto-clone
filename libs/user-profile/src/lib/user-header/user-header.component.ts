import { Component, Input } from '@angular/core';
import { UserDetails } from '@devto/core/models';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent {
  @Input() user!: UserDetails;
}
