import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollageListComponent } from './collage-list.component';

const routes: Routes = [{ path: '', component: CollageListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollageListRoutingModule { }
