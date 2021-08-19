import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input() user!: UserDetails

  constructor() {}

  ngOnInit(): void {}
}
