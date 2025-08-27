import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-team-component',
  imports: [CarouselModule],
  templateUrl: './team-component.html',
  styleUrl: './team-component.css'
})

export class TeamComponent {

  specialists = [
    {
      "name": "Alfredo Palacios",
      "description": "Odontopediatría",
      "image": "assets/images/doctors/odonto_4.webp"
    },
    {
      "name": "Eduardo Vázquez",
      "description": "Ortodoncia",
      "image": "assets/images/doctors/odonto_1.webp"
    },
    {
      "name": "Cecilia Jaret",
      "description": "Periodoncia",
      "image": "assets/images/doctors/odonto_3.jpg"
    },
    {
      "name": "Carlos Jímenez",
      "description": "Endodoncia",
      "image": "assets/images/doctors/odonto_2.jpg"
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
