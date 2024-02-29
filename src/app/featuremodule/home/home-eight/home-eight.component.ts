import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import * as AOS from 'aos';
import { MatTableDataSource } from '@angular/material/table';
import { dataServices } from '../../../service/dataServices.service';

@Component({
  selector: 'app-home-eight',
  templateUrl: './home-eight.component.html',
  styleUrls: ['./home-eight.component.scss'],
})
export class HomeEightComponent {
  SITE_URL = 'http://localhost:1337';

  public routes = routes;
  public categories: any = [];
  categoriesDataSource = new MatTableDataSource();
  selectedCategory: any = '';
  searchInputCategory: any;
  public trendingplace: any = [];
  public latestBlog: any = [];
  public businessslider: any = [];
  public customersays: any = [];
  public featuredads: any = [];
  public hoildayCabin: any = [];
  public bridesdata: any = [];
  bannerData: any;
  gridBlog: any;
  heroSection: any;
  homeAbout: any;
  firstSlider: any;
  sectionHeading: any;
  topCollage:any;
  examSection: any;
  constructor(
    private DataService: DataService,
    public router: Router,
    private dataServices: dataServices
  ) {
    (this.trendingplace = this.DataService.trendingplace),
      (this.businessslider = this.DataService.businessslider),
      (this.categoriesDataSource = new MatTableDataSource(this.categories));
    (this.customersays = this.DataService.customersays),
      (this.categories = this.DataService.categoriesList),
      (this.featuredads = this.DataService.featuredadsList),
      (this.bridesdata = this.DataService.bridesdata)  }

  public featuredadsOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  public trendingplaceOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: false,
    rtl: false,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1200: {
        items: 4,
        loop: true,
      },
    },
  };
  public hoildayCabinOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
        loop: false,
      },
    },
    nav: true,
  };
  public bridesdataOwlOptions: OwlOptions = {
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
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
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
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  public businesssliderOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 5,
        loop: true,
      },
    },
    nav: true,
  };
  public customersaysOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 5,
        loop: true,
      },
    },
    nav: true,
  };
  searchCategory(value: any): void {
    const filterValue = value;
    this.categoriesDataSource.filter = filterValue.trim().toLowerCase();
    this.categories = this.categoriesDataSource.filteredData;
  }
  ngOnInit(): void {
    this.dataServices.bannerData().subscribe((data) => {
      this.bannerData = data;
      console.log(this.bannerData);
    });
    this.dataServices.blogList().subscribe(
      (response: any) => {
        this.gridBlog = response?.data || [];
      },
      (error) => {
        console.error(error);
      }
    );

    this.dataServices.heroSection().subscribe((data) => {
      this.heroSection = data;
      console.log(this.heroSection);
    });
    this.dataServices.HomeAbout().subscribe((data) => {
      this.homeAbout = data;
      console.log(this.homeAbout);
    });
    this.dataServices.HomeFirstSlider().subscribe((data) => {
      this.firstSlider = data;

      // Check if data is not empty and has the expected structure
      if (this.firstSlider && this.firstSlider.length > 0 && this.firstSlider[0]?.attributes) {
        this.sectionHeading = this.firstSlider[0]?.attributes?.SectionHeading;

        // Print sectionHeading outside the loop
        console.log("Section Heading:", this.sectionHeading);

        // Loop through other values
        this.firstSlider.forEach((slide: any) => {
          const collageTitle = slide.attributes.CollageTitle;
          const collageRank = slide.attributes.collageRank;
          const collageLocation = slide.attributes.CollageLocation;
          const collageImageUrl = slide.attributes.collageimage.data[0]?.attributes.url;

          // Print other values inside the loop
          console.log("Collage Title:", collageTitle);
          console.log("Collage Rank:", collageRank);
          console.log("Collage Location:", collageLocation);
          console.log("Collage Image URL:", collageImageUrl);
        });
      } else {
        console.error("Invalid data structure or empty data.");
      }
    });
    this.dataServices.topCollage().subscribe((data) => {
      this.topCollage = data;
      console.log(this.topCollage);
    });

    this.dataServices.exam().subscribe((data) => {
      this.examSection = data;
      console.log(this.heroSection);
    });
  
  }
  
}
