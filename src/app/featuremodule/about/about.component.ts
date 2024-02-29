import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { dataServices } from 'src/app/service/dataServices.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  SITE_URL = 'http://localhost:1337'

  public routes=routes;
  aboutUs: any;
  constructor(private dataServices:dataServices){

  }
  ngOnInit(): void {
    this.dataServices.aboutUs().subscribe(
      data => {
        this.aboutUs = data;  
        console.log(this.aboutUs)  
   
  })
}
}
