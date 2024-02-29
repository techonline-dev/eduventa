import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { CollegePredictorModule } from './featuremodule/college-predictor/college-predictor.module';
import { CollageListModule } from './featuremodule/collage-list/collage-list.module';
import { ListByLocationModule } from './featuremodule/list-by-location/list-by-location.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatTabsModule,
    BrowserAnimationsModule,
    CollegePredictorModule,
    ListByLocationModule,
    CollageListModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
