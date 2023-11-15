import { Component } from '@angular/core';
import { Slide } from './out-service.interface';
@Component({
  selector: 'app-out-service',
  templateUrl: './out-service.component.html',
  styleUrls: ['./out-service.component.css']
})
export class OutServiceComponent {
  slides: Slide[] = [
    {
      url: 'url(../../assets/images / out - service - feedback.png)',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: 'url(../../assets/images / out - service - feedback.png)',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: 'url(../../assets/images / out - service - feedback.png)',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
    {
      url: 'url(../../assets/images / out - service - feedback.png)',
      name: 'Sri Mulyani Indrawati, S.E., M.Sc., Ph.D.',
      comment: 'Lorem ipsum dolor sit amet consectetur. Nulla pulvinar pellentesque amet praesent sit malesuada pellentesque nisi.'
    },
  ]
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  constructor(){
    console.log(this.slides[0].name)
  }
}
