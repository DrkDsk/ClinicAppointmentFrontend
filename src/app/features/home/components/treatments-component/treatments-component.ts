import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-treatments-component',
  imports: [CarouselModule],
  templateUrl: './treatments-component.html',
  styleUrl: './treatments-component.css'
})
export class TreatmentsComponent {

  treatments = [
    {
      "image": "assets/images/treatments/before_1.jpg"
    },
    {
      "image": "assets/images/treatments/before_2.jpg"
    },
    {
      "image": "assets/images/treatments/before_3.jpg"
    },
    {
      "image": "assets/images/treatments/before_4.jpg"
    }
  ]

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]

}
