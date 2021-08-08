import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsComponent } from './listings.component';
import { RouterModule } from '@angular/router';
import { ListingsHeaderComponent } from './listings-header/listings-header.component';
import { ListingsSidenavComponent } from './sidenav/listings-sidenav/listings-sidenav.component';
import { ListingsContentComponent } from './contents/listings-content/listings-content.component';
import { MasonaryDirective } from './contents/masonary.directive';
import { LetModule, PushModule } from '@rx-angular/template';
import { ListingCardComponent } from './contents/listing-card/listing-card.component';


@NgModule({
  declarations: [
    ListingsComponent,
    ListingsHeaderComponent,
    ListingsSidenavComponent,
    ListingsContentComponent,
    MasonaryDirective,
    ListingCardComponent
  ],
  imports: [
    LetModule,
    PushModule,
    RouterModule.forChild([{
      path:'',
      component:ListingsComponent,
      children:[
        {
          path:':category',
          component:ListingsContentComponent
        },
        {
          path:'',
          component:ListingsContentComponent
        }
      ]
    }
  ]),
    CommonModule
  ]
})
export class ListingsModule { }
