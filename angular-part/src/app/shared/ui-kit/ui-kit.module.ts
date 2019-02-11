import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule,
  NbThemeModule,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule,
  NbInputModule,
  NbTabsetModule
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
    NbSpinnerModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule
  ]
})
export class UiKitModule { }
