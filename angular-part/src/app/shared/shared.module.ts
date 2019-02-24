import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { TextFilterPipe } from './pipes/text-filter.pipe';

@NgModule({
  declarations: [TextFilterPipe],
  imports: [
    CommonModule,
    UiKitModule
  ],
  exports: [
    UiKitModule,
    TextFilterPipe
  ]
})
export class SharedModule { }
