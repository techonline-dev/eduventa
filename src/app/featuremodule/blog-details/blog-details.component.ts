
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dataServices } from '../../service/dataServices.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  SITE_URL = 'http://localhost:1337'
  blogDetails: any;
  constructor(
    private dataServices: dataServices,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router, 
  ) { }

  // ngOnInit(): void {
  //   this.dataServices.blogDetails().subscribe(
      
  //     data => {
  //       this.blogDetails =data;
  //       console.log(data)
  //       this.cdr.detectChanges(); 
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const blogId = params.get('id') || '';
      console.log('Extracted blogId:', blogId);
  
      const blogDetails$ = this.dataServices.blogDetailsWithId(blogId);
      console.log('blogDetails$ observable:', blogDetails$);
  
      blogDetails$.subscribe(
        data => {
          this.blogDetails = data;
          console.log('Blog Details:', data);
          this.cdr.detectChanges();
        },
        error => {
          console.error('Error fetching blog details:', error);
        }
      );
    });
  }
  
}