
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dataServices } from '../../service/dataServices.service';


@Component({
  selector: 'college-predictor',
  templateUrl: './college-predictor.component.html',
  styleUrls: ['./college-predictor.component.css']
})
export class CollagePredicator implements OnInit {
  SITE_URL = 'http://localhost:1337'

  collegPpredictors: any;
  constructor(
    private dataServices: dataServices,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.dataServices.collegPpredictors().subscribe(
      data => {
        this.collegPpredictors =data;
        console.log(data)
        this.cdr.detectChanges(); 
      },
      error => {
        console.error(error);
      }
    );
  }

}