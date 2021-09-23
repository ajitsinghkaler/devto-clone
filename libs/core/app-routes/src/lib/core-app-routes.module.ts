import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from '@devto/global-components';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('@devto/home').then((m) => m.HomeModule),
      },
      {
        path: 'videos',
        loadChildren: () =>
          import('@devto/videos').then((m) => m.VideosModule),
      },
      {
        path: 'listings',
        loadChildren: () =>
          import('@devto/listings').then((m) => m.ListingsModule),
      },
      {
        path: 'users/:username',
        loadChildren: () =>
          import('@devto/user-profile').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: ':user/:slug',
        loadChildren: () =>
          import('@devto/article-detail').then(
            (m) => m.ArticleDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
