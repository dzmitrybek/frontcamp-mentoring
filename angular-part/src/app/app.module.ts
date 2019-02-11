import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { NewsPageModule } from '@app/pages/news-page/news-page.module';
import { HttpClientModule } from '@angular/common/http';
import { EditPageModule } from '@app/pages/edit-page/edit-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CoreModule,
    SharedModule,

    // page modules
    NewsPageModule,
    EditPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
