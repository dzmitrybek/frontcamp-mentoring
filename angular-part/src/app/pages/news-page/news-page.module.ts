import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  declarations: [
    NewsPageComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NewsPageComponent]
})
export class NewsPageModule { }
