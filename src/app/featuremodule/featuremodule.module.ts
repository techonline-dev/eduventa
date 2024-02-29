import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturemoduleRoutingModule } from './featuremodule-routing.module';
import { FeaturemoduleComponent } from './featuremodule.component';
import { SharedModule } from '../shared/shared/shared.module';
import { PopupComponent } from './popup/popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { DownloadPopupComponent } from './download-popup/download-popup.component';

@NgModule({
  declarations: [FeaturemoduleComponent],
  imports: [CommonModule, FeaturemoduleRoutingModule, SharedModule,PopupComponent,MatButtonModule,MatDialogModule,DownloadPopupComponent,MatSelectModule],
})
export class FeaturemoduleModule {}
