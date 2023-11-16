import { Component } from '@angular/core';
interface Slide {
  url: string;
  name: string;
  comment: string;
}


@Component({
  selector: 'app-out-service',
  templateUrl: './out-service.component.html',
  styleUrls: ['./out-service.component.css']
})

export class OutServiceComponent {

  slides: Slide[] = [
    {
      url: '../../assets/images/out-service-feedback.png',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D. 1',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: '../../assets/images/out-service-feedback.png',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D. 2',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: '../../assets/images/out-service-feedback.png',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D. 3',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: '../../assets/images/out-service-feedback.png',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D. 4',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: '../../assets/images/out-service-feedback.png',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D. 5',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: '../../assets/images/out-service-feedback.png',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D.6',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: '../../assets/images/out-service-feedback.png',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D.7',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: '../../assets/images/out-service-feedback.png',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D.8',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
  ]
  visibleSlides: Slide[] = []; // Initialize an empty array
  displayedSlidesCount = 3; // Number of slides to display at once
  startIndex = 0; // Index to start displaying slides

  updateVisibleSlides() {
    this.visibleSlides = this.slides.slice(this.startIndex, this.startIndex + this.displayedSlidesCount);
  }
  ngOnInit() {
    this.updateVisibleSlides(); // Update visible slides initially
  }
  next() {
    if (this.startIndex + this.displayedSlidesCount < this.slides.length) {
      this.startIndex += 2;
    } else {
      this.startIndex = 0;
    }
    this.updateVisibleSlides();
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex -= 2;
    } else {
      this.startIndex = this.slides.length - this.displayedSlidesCount;
    }
    this.updateVisibleSlides();
  }
}
