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

  testApi() {
    const request = this.dashboardService.getUser();

    request.subscribe({
      next: (user) => {
        console.log(user.data.id);
      },
      error: (error) => {

      }
    });
  }


}
