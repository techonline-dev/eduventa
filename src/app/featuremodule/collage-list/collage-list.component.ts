// collage-list.component.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dataServices } from '../../service/dataServices.service';
import { DownloadPopupComponent } from '../download-popup/download-popup.component';
import { PopupComponent } from '../popup/popup.component';

interface College {
  location: string;
  courseFee: number;
  collegeName: string;
  approvedBy: string;
  logoUrl: string;
  Ranking:string
  
}

@Component({
  selector: 'app-collage-list',
  templateUrl: './collage-list.component.html',
  styleUrls: ['./collage-list.component.css']
})
export class CollageListComponent implements OnInit {
  SITE_URL = 'http://localhost:1337'

  formattedData: College[] = [];
  constructor(
    private dataServices: dataServices,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.dataServices.collageList().subscribe(
      data => {
        this.formatCollageData(data);
        this.cdr.detectChanges(); 
      },
      error => {
        console.error(error);
      }
    );
  }

  formatCollageData(data: any): void {
    this.formattedData = data.data.map((college: any) => {
      return {
        location: college.attributes.location,
        courseFee: college.attributes.course_fee,
        collegeName: college.attributes.college_name,
        approvedBy: college.attributes.approved_by,
        logoUrl: college.attributes.college_logo.data.attributes.url,
        Ranking:college.attributes.Ranking,
      };
    });

    console.log('Formatted Data:', this.formattedData);
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