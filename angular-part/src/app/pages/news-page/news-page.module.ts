import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    NewsPageComponent,
    NewsCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [NewsPageComponent]
})
export class NewsPageModule { }
