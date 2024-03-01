
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { dataServices } from '../../../service/dataServices.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { SidebarService } from 'src/app/service/sidebar.service';
import { routes } from 'src/app/core/helpers/routes/routes';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  base: string = '';
  page: string = '';
  last: string = '';
  menuData:any
  public nav: boolean = false;
  header: Array<any> = [];
  public routes = routes;
  constructor(
    private data: DataService,
    private router: Router,
    private dataServices: dataServices,
    private sidebarService: SidebarService,
  ) {
    // this.header = this.data.header;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.getroutes(event);
      }
    });
    this.getroutes(this.router);
  }
  ngOnInit(): void {
    this.dataServices.menuHeader().subscribe(data => {
      this.menuData = data;
      console.log(this.menuData);      
    });
    // AOS.init();
    
  }
  private getroutes(route: any): void {
    let splitVal = route.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];

    if (this.base == 'userpages') {
      this.nav = false;
    } else {
      this.nav = true;
    }
  }
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}
