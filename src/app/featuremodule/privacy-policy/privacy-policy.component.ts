
import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { dataServices } from 'src/app/service/dataServices.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})

export class PrivacyPolicyComponent {
  public routes=routes;
  terms: any;
  privacyTitle: any;
  privacypolicydetails: string[] = [];


  privacyPolicyHeading: any;
  constructor(private dataServices:dataServices){

  }
  ngOnInit(): void {
   
    this.dataServices.privacy().subscribe(
      (data: any) => {
        // Debugging: Log the received data
        console.log('Received data:', data);
    
        if (data && data.data && data.data.length > 0 && data.data[0].attributes) {
          this.privacyTitle = data.data[0].attributes.privacyPolicyHeading;
    
          const paragraphs = data.data[0].attributes.termscondition;
    
          // Debugging: Log the paragraphs data
          console.log('Paragraphs:', paragraphs);
    
          if (paragraphs && Array.isArray(paragraphs)) {
            this.privacypolicydetails = paragraphs
              .filter(paragraph => paragraph.children && paragraph.children.length > 0)
              .map(paragraph => paragraph.children[0].text);
              
            // Debugging: Log the resulting details
            console.log('Privacy Policy Details:', this.privacypolicydetails);
          } else {
            console.error('Invalid paragraphs structure or empty data.');
          }
        } else {
          console.error('Invalid data structure or empty data.');
        }
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
    
  }
  
  
}
