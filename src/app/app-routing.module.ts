import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './global/components/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: ':user/:slug',
        loadChildren: () =>
          import('./pages/article-detail/article-detail.module').then(
            (m) => m.ArticleDetailModule
          ),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'listings',
        loadChildren: () =>
          import('./pages/listings/listings.module').then((m) => m.ListingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
