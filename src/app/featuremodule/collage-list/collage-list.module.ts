import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';

import { CollageListRoutingModule } from './collage-list-routing.module';
import { CollageListComponent } from './collage-list.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CollageListComponent }, 
];

@NgModule({
  declarations: [
    CollageListComponent
  ],
  imports: [
    CommonModule,
    CollageListRoutingModule,
    SharedModule,
    FormsModule ,
    RouterModule.forChild(routes)
  ]})
export class CollageListModule { }
