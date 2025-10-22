import { Component } from '@angular/core';
import { DashboardService } from '../data/services/dashboard.service';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {

  constructor(private dashboardService: DashboardService) { }

}
