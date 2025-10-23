import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import customResponsiveOptions from '../../../../../core/constants/responsive_carousel_options';

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

  responsiveOptions = customResponsiveOptions

}
