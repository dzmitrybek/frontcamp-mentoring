import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule,
  NbThemeModule,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule,
  NbInputModule,
  NbTabsetModule,
  NbDatepickerModule
} from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot(),
    NbDatepickerModule.forRoot(),
  ],
  exports: [
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    NbInputModule,
    NbButtonModule,
    NbTabsetModule,
    NbDatepickerModule
  ]
})
export class UiKitModule { }
