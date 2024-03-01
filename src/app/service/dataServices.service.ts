import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class dataServices {
  static baseURL = "http://localhost:1337";

  url = dataServices.baseURL + "/api/menus/1?nested&populate=*";
  url1 = dataServices.baseURL + "/api/banners?[populate]=*";
  url2 = dataServices.baseURL + "/api/college-lists?populate=*";
  url3 = dataServices.baseURL + "/api/about-uses?populate=*";
  url4 = dataServices.baseURL + "/api/footer-strips?populate=*";
  url5 = dataServices.baseURL + "/api/terms-conditions?populate=*";
  url6 = dataServices.baseURL + "/api/privacy-policies?populate=*";
  url7 = dataServices.baseURL + "/api/blogs?populate=*";
  url8 = dataServices.baseURL + "/api/college-predictors?populate=*";
  url9 = dataServices.baseURL + "/api/hero-section-for-advertisings?[populate]=*";
  url10 = dataServices.baseURL + "/api/home-abouts?[populate]=*";
  url11 = dataServices.baseURL + "/api/home-collage-list-section-ones?[populate]=*";
  url12 = dataServices.baseURL + "/api/top-colleges?[populate]=*";
  url13 = dataServices.baseURL + "/api/exam-sliders?[populate]=*";
  url14 = dataServices.baseURL + "/api/blog-details?[populate]=*";
  url15 = dataServices.baseURL + "/api/college-details?[populate]=*";
  url16 = dataServices.baseURL + "/api/colleges?[populate]=*";
  url17 = dataServices.baseURL + "/api/menus/2?nested&populate=*";




  constructor(private http: HttpClient) { }
  footerData() {
    return this.http.get(this.url)
  }
  footerDataStrip() {
    return this.http.get(this.url4)
  }
  bannerData() {
    return this.http.get(this.url1)
  }
  collageList() {
    return this.http.get(this.url2)
  }
  aboutUs() {
    return this.http.get(this.url3)
  }
  terms() {
    return this.http.get(this.url5)

  }
  privacy() {
    return this.http.get(this.url6)
  }
  blogList() {
    return this.http.get(this.url7)
  }
  collegPpredictors() {
    return this.http.get(this.url8)
  }
  heroSection() {
    return this.http.get(this.url9)
  }
  HomeAbout() {
    return this.http.get(this.url10)
  }
  HomeFirstSlider() {
    return this.http.get(this.url11)
  }
  topCollage() {
    return this.http.get(this.url12)
  }
  exam() {
    return this.http.get(this.url13)
  }
  blogDetails() {
    return this.http.get(this.url14)
  }
  collageDetails() {
    return this.http.get(this.url15)
  }
  collageByLocation() {
    return this.http.get(this.url16)
  }
  menuHeader()
  {
    return this.http.get(this.url17)

  }
}
