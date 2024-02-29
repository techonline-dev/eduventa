import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListByLocationRoutingModule } from './list-by-location-routing.module';
import { ListByLocation } from './list-by-location.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    ListByLocation
  ],
  imports: [
    CommonModule,
    ListByLocationRoutingModule,
    SharedModule
  ]
})
export class ListByLocationModule { }
