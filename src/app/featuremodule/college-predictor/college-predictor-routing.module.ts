import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollagePredicator } from './college-predictor.component';

const routes: Routes = [{ path: '', component: CollagePredicator }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegePredictorRouting { }
