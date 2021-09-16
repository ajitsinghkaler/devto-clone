import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './global/components/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'videos',
        loadChildren: () =>
          import('./pages/videos/videos.module').then((m) => m.VideosModule),
      },
      {
        path: 'listings',
        loadChildren: () =>
          import('@devto/listings').then((m) => m.ListingsModule),
      },
      {
        path: 'users/:username',
        loadChildren: () =>
          import('./pages/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: ':user/:slug',
        loadChildren: () =>
          import('./pages/article-detail/article-detail.module').then(
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
export class AppRoutingModule {}
