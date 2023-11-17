import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currenturl: string;
  constructor(public location: Location) {
    this.currenturl = this.location.path();
    if(this.currenturl !== '/login'){
      console.log('navbar tidak ada')
    }
  }
  ngOnInit() {
    this.currenturl = this.location.path();
  }
}
