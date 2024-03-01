import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { dataServices } from '../../service/dataServices.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogGridSidebarComponent implements OnInit {
  SITE_URL = 'http://localhost:1337'
  gridBlog: any = [];
  constructor(
    private dataServices: dataServices,
    private router: Router,
    private route: ActivatedRoute
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
  navigateToDetailsPage(slide: any): void {
    const blogDetailId = slide.attributes.slug;
    this.router.navigate(['/blog-details', blogDetailId]);
}
}