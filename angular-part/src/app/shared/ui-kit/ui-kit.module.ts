import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule,
  NbThemeModule,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule
} from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot()
  ],
  exports: [
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule
  ]
})
export class UiKitModule { }
