import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class dataServices {
url = "http://localhost:1337/api/menus/1?nested&populate=*";
url1 = "http://localhost:1337/api/banners?[populate]=*";
url2 = "http://localhost:1337/api/college-lists?populate=*";
url3 ="http://localhost:1337/api/about-uses?populate=*";
url4 ="http://localhost:1337/api/footer-strips?populate=*";
url5 ="http://localhost:1337/api/terms-conditions?populate=*";
url6 = "http://localhost:1337/api/privacy-policies?populate=*";
url7 = "http://localhost:1337/api/blogs?populate=*";
url8 = "http://localhost:1337/api/college-predictors?populate=*";
url9 = "http://localhost:1337/api/hero-section-for-advertisings?[populate]=*";
url10 ="http://localhost:1337/api/home-abouts?[populate]=*";
url11 ="http://localhost:1337/api/home-collage-list-section-ones?[populate]=*";
url12 ="http://localhost:1337/api/top-colleges?[populate]=*";
url13 ="http://localhost:1337/api/exam-sliders?[populate]=*"




  constructor(private http: HttpClient) { }
  footerData()
  {
    return this.http.get(this.url)
  }
  footerDataStrip()
  {
    return this.http.get(this.url4)
  }
  bannerData()
  {
    return this.http.get(this.url1)
  }
  collageList()
  {
    return this.http.get(this.url2)
  }
  aboutUs()
  {
    return this.http.get(this.url3)
  }
  terms()
  {
    return this.http.get(this.url5)

  }
  privacy()
  {
    return this.http.get(this.url6)
  }
  blogList()
  {
    return this.http.get(this.url7)
  }
  collegPpredictors()
  {
    return this.http.get(this.url8)
  }
  heroSection()
  {
    return this.http.get(this.url9)
  }
  HomeAbout()
  {
    return this.http.get(this.url10)
  }
  HomeFirstSlider()
  {
    return this.http.get(this.url11)
  }
  topCollage()
  {
    return this.http.get(this.url12)
  }
  exam()
  {
    return this.http.get(this.url13)
  }
}
