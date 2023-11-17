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
  ]
  visibleSlides: Slide[] = []; // Inisialisasi array kosong

  startIndex = 0; // Indeks untuk mulai menampilkan slide
  updateChange = false;
  displayedSlidesCount = 3;
  remainingSlides: any;

  updateVisibleSlides() {
    this.visibleSlides = this.slides.slice(this.startIndex, this.startIndex + this.displayedSlidesCount);
  }

  ngOnInit() {
    this.updateVisibleSlides();
    
  }

  next() {
    this.startIndex = (this.startIndex + 1) % this.slides.length;
    this.updateVisibleSlides();
  }

  prev() {
    this.startIndex = (this.startIndex - 1 + this.slides.length) % this.slides.length;
    this.updateVisibleSlides();
  }

}
