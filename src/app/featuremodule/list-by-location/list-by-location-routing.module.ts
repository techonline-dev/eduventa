import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListByLocation } from './list-by-location.component';

const routes: Routes = [{ path: '', component: ListByLocation }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListByLocationRoutingModule { }
