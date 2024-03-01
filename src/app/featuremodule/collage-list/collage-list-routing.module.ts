import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollageListComponent } from './collage-list.component';

// const routes: Routes = [{ path: '', component: CollageListComponent }];

const routes: Routes = [
  {
    path: '',
    component: CollageListComponent,
    data: { courseType: 'MBBS' }
  },
  {
    path: '',
    component: CollageListComponent,
    data: { courseType: 'MBA' }
  },
  {
    path: '',
    component: CollageListComponent,
    data: { courseType: 'B.TECH' }
  },
  {
    path: '',
    component: CollageListComponent,
    data: { courseType: 'M.TECH' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollageListRoutingModule { }
