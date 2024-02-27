import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegePredictorRouting } from './college-predictor-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CollagePredicator } from './college-predictor.component';


@NgModule({
  declarations: [
    CollagePredicator
  ],
  imports: [
    CommonModule,
    CollegePredictorRouting,
    SharedModule
  ]
})
export class CollegePredictorModule { }
