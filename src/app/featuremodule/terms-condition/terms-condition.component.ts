import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { dataServices } from 'src/app/service/dataServices.service';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})

export class TermsConditionComponent {
  public routes=routes;
  terms: any;
  termsTitle: any;
  paragraphTexts: string[] = [];


  termsConditionTitle: any;
  constructor(private dataServices:dataServices){

  }
  ngOnInit(): void {
      this.dataServices.terms().subscribe(
        (data: any) => {
          if (data && data.data && data.data.length > 0 && data.data[0].attributes) {
            this.termsTitle = data.data[0].attributes.termsConditionTitle;
  
            const paragraphs: { type: string; children: { type: string, text: string }[] }[] = data.data[0].attributes.termscondition;
  
            this.paragraphTexts = paragraphs
              .filter(paragraph => paragraph.children && paragraph.children.length > 0)
              .map(paragraph => paragraph.children[0].text);
  
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
