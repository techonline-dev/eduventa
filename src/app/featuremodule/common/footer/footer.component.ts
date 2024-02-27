import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { routes } from 'src/app/core/helpers/routes/routes';
import { dataServices } from '../../../service/dataServices.service';
interface FooterData {
  data: {
    id: number;
    attributes: {
      title: string;
      // ... other properties
    };
  };
  meta: any; // Adjust the type based on the actual structure
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public routes = routes;
  // footers: Footer[] = [];
  constructor(public router: Router,private dataServices: dataServices){

  }
  footers: any;
  headline: string | undefined;
  MobileNumner: string | undefined;

  ngOnInit() {
    this.dataServices.footerData().subscribe(data => {
      this.footers = data;
      console.log(this.footers);      

    });
    this.dataServices.footerDataStrip().subscribe((data: any) => {
    
      // Check if data array exists and has elements
      if (data && data.data && data.data.length > 0) {
        const firstData = data.data[0]; // Assuming you want the first item in the array
        const attributes = firstData.attributes;
    
        // Access MobileNumner and HeadLine
        this.MobileNumner = attributes.MobileNumner;
        this.headline = attributes.HeadLine;
      }
    });
    
  }    
}
