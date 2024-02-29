import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollagePredicatorDetails } from './college-predictor-details.component';

const routes: Routes = [{ path: '', component: CollagePredicatorDetails }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegePredictorDetailsRouting { }
