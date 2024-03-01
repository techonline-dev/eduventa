import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dataServices } from '../../service/dataServices.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-location',
  templateUrl: './list-by-location.component.html',
  styleUrls: ['./list-by-location.component.css']
})
export class ListByLocation {
  SITE_URL = 'http://localhost:1337'
  collageByfilter: any;
  constructor(
    private dataServices: dataServices,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.dataServices.collageByLocation().subscribe(
      data => {
        this.collageByfilter =data;
        console.log(data)
        this.cdr.detectChanges(); 
      },
      error => {
        console.error(error);
      }
    );
  }
  navigateToDetailsPage(college: any): void {
    const collageSlug = college.attributes.slug;

    // Check if the slug is not null or undefined before navigating
    if (collageSlug) {
        this.router.navigate(['/collage-details', collageSlug]);
    } else {
        console.error('Slug is null or undefined for the college:', college);
        // Optionally, you can handle this case by redirecting to a default page or showing an error message
    }
}

}