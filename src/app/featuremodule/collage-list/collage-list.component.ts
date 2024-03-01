// collage-list.component.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dataServices } from '../../service/dataServices.service';
import { DownloadPopupComponent } from '../download-popup/download-popup.component';
import { PopupComponent } from '../popup/popup.component';
import { Router, ActivatedRoute } from '@angular/router';

interface College {
  id: number;
  attributes: {
    location: string;
    courseFee: number;
    collegeName: string;
    approvedBy: string;
    logoUrl: string;
    Ranking: string;
    CollageTag: string;
    CollageType: string;
  };
}


@Component({
  selector: 'app-collage-list',
  templateUrl: './collage-list.component.html',
  styleUrls: ['./collage-list.component.css']
})
export class CollageListComponent implements OnInit {
  SITE_URL = 'http://localhost:1337'

  formattedData: College[] = [];
  // collageList: College[] = [];
  collageList: any;
  constructor(
    private dataServices: dataServices,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const courseType = data['courseType']; 
      this.dataServices.collageList().subscribe(
        response => {
          if (response && 'data' in response && Array.isArray(response.data)) {
            this.collageList = response.data.filter((college: College) => {
              const meetsCriteria =
                college.attributes.CollageType === courseType && college.attributes.CollageTag === 'Top ranked colleges';
  
              return meetsCriteria;
            });
            this.cdr.detectChanges();
          } else {
            console.error("Invalid API response format");
          }
        },
        error => {
          console.error(error);
        }
      );
    });
  }
  
  navigateToDetailsPage(college: any): void {
    const collageSlug = college.attributes.slug;
    this.router.navigate(['/collage-details', collageSlug]);
  }
  downloadOpenDialog() {
    const dialogRef = this.dialog.open(DownloadPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}