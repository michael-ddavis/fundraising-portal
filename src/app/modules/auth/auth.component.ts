import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Slide } from './carousel/carousel.interface';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    standalone: true,
    imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent implements OnInit {
  constructor() {}

  slides: Slide[] = [
    {
      headline: "Morocco",
      src: "./assets/bg/morocco.jpg",
    },
    {
      headline: "Nepal",
      src: "./assets/bg/nepal.jpg",
    },
    {
      headline: "Turkey",
      src: "./assets/bg/turkey.jpg",
    },
    {
      headline: "Lebanon",
      src: "./assets/bg/lebanon.jpg",
    },
    {
      headline: "Dubai",
      src: "./assets/bg/dubai.jpg",
    },
    {
      headline: "Egypt",
      src: "./assets/bg/egypt.jpg",
    },
    {
      headline: "Jordan",
      src: "./assets/bg/jordan.jpg",
    }
  ];

  min = 0;
  max = 7;
  randomSlideIndex = 0;
  shownSlide: Slide = {}

  ngOnInit(): void {
    this.randomSlideIndex = Math.floor(Math.random() * this.slides.length); 
    this.shownSlide = this.slides[this.randomSlideIndex];
  }
}
