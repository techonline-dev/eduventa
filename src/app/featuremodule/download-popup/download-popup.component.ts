import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'download-popup.component',
  templateUrl: './download-popup.component.html',
  styleUrls: ['./download-popup.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],

})
export class DownloadPopupComponent {

}
