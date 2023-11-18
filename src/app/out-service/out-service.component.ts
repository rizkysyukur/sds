import { Component, ElementRef, ViewChild } from '@angular/core';
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
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D. 6',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
  ]
  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef; // ViewChild to reference the cards wrapper

  visibleSlides: Slide[] = [];
  startIndex = 0;
  displayedSlidesCount = 3;
  slideWidth = 300;
  totalSlides = this.slides.length;

  constructor() {
    // Inisialisasi data, jika ada
  }

  ngAfterViewInit() {
    this.moveCarousel();
  }

  moveCarousel() {
    if (this.cardsWrapper) {
      const wrapperElement = this.cardsWrapper.nativeElement as HTMLElement;
      wrapperElement.style.transform = `translateX(-${this.startIndex * this.slideWidth}px)`;
    }
  }

  next() {
    if (this.startIndex < this.slides.length - 1) {
      this.startIndex++;
      this.moveCarousel();
    }
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.moveCarousel();
    }
  }
}