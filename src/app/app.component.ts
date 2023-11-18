import { DOCUMENT, Location } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sds_system';
  currentUrl: string;
  constructor(@Inject(DOCUMENT) private document: Document, public location: Location, private router: Router) {
    this.currentUrl = this.location.path();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.location.path();
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      document.getElementById('header')?.classList.add('bg-sds-bg', 'transition-all');
    } else {
      document.getElementById('header')?.classList.remove('bg-sds-bg', 'transition-all');
    }
  }
  name = 'Angular';


}
