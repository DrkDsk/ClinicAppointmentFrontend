import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header-component/header-component";
import { SolutionsComponent } from "./components/solutions-component/solutions-component";
import { TeamComponent } from './components/team-component/team-component';
import { DoctorReviewsComponent } from "./components/doctor-reviews-component/doctor-reviews-component";
import { TreatmentsComponent } from "./components/treatments-component/treatments-component";
import { FooterComponent } from "./components/footer-component/footer-component";

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent, SolutionsComponent, TeamComponent, DoctorReviewsComponent, TreatmentsComponent, FooterComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
