import { Component, ElementRef, ViewChild } from '@angular/core';
interface SlidesType {
  src: string;
  title: string;
  list: string;
}
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

  slides: SlidesType[] = [
    {
      src: "../../assets/icons/handmade.svg",
      title: "Care",
      list: "passion for helping each others \n Always Consider the impact of our Actions on others \n Always Open and Happy to work with others \n"
    },
    {
      src: "../../assets/icons/Facebook Like.svg",
      title: "Service Oriented",
      list: "Empathize at Work \n Focus on Client Needs \n Have a Big Goals other than Personal Goals \n"
    },
    {
      src: "../../assets/icons/Light On.svg",
      title: "Innovative",
      list: "Motivated on the learning \n Taking the time to learn \n Rewarding failure equals success \n"
    },
    {
      src: "../../assets/icons/Facebook Like.svg",
      title: "Service Oriented2",
      list: "Empathize at Work \n Focus on Client Needs \n Have a Big Goals other than Personal Goals \n"
    },
    {
      src: "../../assets/icons/Light On.svg",
      title: "Innovative2",
      list: "Motivated on the learning \n Taking the time to learn \n Rewarding failure equals success \n"
    },
  ]
  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef; // ViewChild to reference the cards wrapper

  visibleSlides: SlidesType[] = []; // Inisialisasi array kosong

  startIndex = 0; // Indeks untuk mulai menampilkan slide
  updateChange = false;
  displayedSlidesCount = 3;
  remainingSlides: any;
  slideWidth: number = 100;

  updateVisibleSlides() {
    this.visibleSlides = this.slides.slice(this.startIndex, this.startIndex + this.displayedSlidesCount);
  }

  ngOnInit() {
    this.updateVisibleSlides();
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
      this.startIndex = this.startIndex + 3;
      // this.updateVisibleSlides();
      this.moveCarousel();
    }
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex =this.startIndex - 3 ;
      // this.updateVisibleSlides();
      this.moveCarousel();
    }

  }
  splitter(str: string): string[] {
    return str.split('\n').filter(Boolean);
  }
}
