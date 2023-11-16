import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showAccordion: boolean = false;
  toggleAccordion() {
    this.showAccordion = !this.showAccordion;
    if (this.showAccordion2) {
      this.showAccordion2 = !this.showAccordion2;
    }
  }
  showAccordion2: boolean = false;
  toggleAccordion2() {
    this.showAccordion2 = !this.showAccordion2;
    if (this.showAccordion) {
      this.showAccordion = !this.showAccordion;
    }
  }
}
