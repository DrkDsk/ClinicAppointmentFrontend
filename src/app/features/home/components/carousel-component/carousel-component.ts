import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel-component',
  imports: [CarouselModule],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css'
})
export class CarouselComponent {

  specialists = [
    {
      "name": "Alfredo",
      "description": "Odonto pediatra",
      "image": "assets/images/doctors/odonto_1.webp"
    },
    {
      "name": "Carlos",
      "description": "Odonto pediatra",
      "image": "assets/images/doctors/odonto_2.jpg"
    },
    {
      "name": "Cecilia",
      "description": "Odonto pediatra",
      "image": "assets/images/doctors/odonto_3.jpg"
    },
    {
      "name": "Alfredo",
      "description": "Odonto pediatra",
      "image": "assets/images/doctors/odonto_4.webp"
    }
  ]

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]

}
