import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegePredictorDetailsRouting } from './college-predictor-details-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    CollegePredictorDetailsRouting
  ],
  imports: [
    CommonModule,
    CollegePredictorDetailsRouting,
    SharedModule
  ]
})
export class CollegePredictorDetailsModule { }
