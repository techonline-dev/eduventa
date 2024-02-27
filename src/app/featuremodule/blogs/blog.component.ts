// import { Component } from '@angular/core';
// import { routes } from 'src/app/core/helpers/routes/routes';
// import { DataService } from 'src/app/service/data.service';

// @Component({
//   selector: 'app-blog',
//   templateUrl: './blog.component.html',
//   styleUrls: ['./blog.component.css']
// })
// export class BlogGridSidebarComponent {
//   public routes=routes;
//   public gridBlog :any =[];
//   constructor(private Dataservice:DataService){
//     this.gridBlog=this.Dataservice.gridBlog
//   }



// }
// // collage-list.component.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { dataServices } from '../../service/dataServices.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogGridSidebarComponent implements OnInit {
  SITE_URL = 'http://localhost:1337'
  gridBlog :any =[];
  constructor(
    private dataServices: dataServices,
  ) { }

  ngOnInit(): void {
    this.dataServices.blogList().subscribe(
      (response: any) => {
        this.gridBlog = response?.data || [];
      },
      error => {
        console.error(error);
      }
    );
    }    
 
}