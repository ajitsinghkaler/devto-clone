import { Component, Input } from '@angular/core';
import { UserDetails } from '@devto/core/models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent  {
  @Input() user!: UserDetails;


}
