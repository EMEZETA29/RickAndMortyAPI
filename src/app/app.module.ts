import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
// import { ComponetModule } from './components/componet.module';

// import { PagesModule } from '.components/pages/pages.module';




@NgModule({
  declarations: [AppComponent, HeaderComponent, FormSearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}