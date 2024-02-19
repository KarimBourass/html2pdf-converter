import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';

const modules = [RouterOutlet, NzLayoutModule];
const components = [HeaderComponent, SideNavComponent];

@Component({
  selector: 'app-layout-container',
  standalone: true,
  imports: [...modules, ...components],
  templateUrl: './layout-container.component.html',
  styleUrls: [],
})
export class LayoutContainerComponent {
  isCollapsed = false;
  pageList!: string[];
  currentYear!: number;
  appName: string = 'Angular Admin';

  constructor(private router: Router) {
    this.currentYear = new Date().getFullYear();

    router.events.forEach((event: any) => {
      if (event instanceof NavigationEnd) {
        this.pageList = [];
        this.pageList = this.pageList.concat(
          event.url
            .substring(1)
            .split('/')
            .slice()
            .filter((item) => item !== '')
        );
      }
    });
  }
}
