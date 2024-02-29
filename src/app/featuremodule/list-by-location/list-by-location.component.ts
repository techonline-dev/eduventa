import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dataServices } from '../../service/dataServices.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


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
    private cdr: ChangeDetectorRef
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

}