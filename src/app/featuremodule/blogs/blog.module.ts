import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridSidebarRoutingModule } from './blog-routing.module';
import { BlogGridSidebarComponent } from './blog.component';


@NgModule({
  declarations: [
    BlogGridSidebarComponent
  ],
  imports: [
    CommonModule,
    BlogGridSidebarRoutingModule
  ]
})
export class BlogGridSidebarModule { }
