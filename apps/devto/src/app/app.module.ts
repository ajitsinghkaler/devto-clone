import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from '@devto/core/app-routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '@devto/global-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutes, HttpClientModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
