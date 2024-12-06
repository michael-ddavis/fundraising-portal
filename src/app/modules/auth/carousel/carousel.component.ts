import { AfterViewInit, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Slide } from "./carousel.interface";
import { trigger, transition, useAnimation } from "@angular/animations";

import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut
} from "./carousel.animations";

@Component({
  selector: "carousel",
  standalone: true,
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "300ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "300ms" } })
      ]),
    ])
  ]
})
export class CarouselComponent {
  @Input() slides: Slide[] = [];
  @Input() animationType = AnimationType.Fade;

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}