import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { DataService } from '../../service/data.service';
import { routes } from 'src/app/core/helpers/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { DownloadPopupComponent } from '../download-popup/download-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-collage-details',
  templateUrl: './collage-details.component.html',
  styleUrls: ['./collage-details.component.css']
})
export class CollageDetailsComponent {
  public routes=routes;
  public albumsOne: any = [];
  public albumsTwo:any =[];
  activeTab: string[] = ['hotels']; // Initialize with default active tab
  public latestBlog: any = [];

  constructor(private DataService: DataService,private _lightbox: Lightbox,public router:Router,private viewportScroller: ViewportScroller,public dialog: MatDialog) {
    for (let i = 5; i <= 12; i++) {
      const src = 'assets/img/gallery/gallery1/gallery-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';

      this.albumsOne.push({ src: src });
      this.albumsTwo.push({src:src});
      
      
    }
    (this.latestBlog = this.DataService.latestBlog)
  }
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }
  openAll( albumArray: Array<any>): void {
    this._lightbox.open(albumArray );
  }
  

  close(): void {
    this._lightbox.close();
  }
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}

  public latestBlogOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  ngOnInit(): void {}
  // direction(){
  //   this.router.navigate([routes.servicedetails])
  // }
  scrollToTab(tabId: string): void {
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 downloadOpenDialog() {
    const dialogRef = this.dialog.open(DownloadPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
