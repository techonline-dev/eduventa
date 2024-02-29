import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollageDetailsComponent } from './collage-details.component';

const routes: Routes = [{ path: '', component: CollageDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDetailsRoutingModule { }
