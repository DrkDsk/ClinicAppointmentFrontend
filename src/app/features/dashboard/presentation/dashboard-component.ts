import { Component } from '@angular/core';
import { DashboardService } from '../data/services/dashboard.service';
import { DrawerComponent } from '../../../core/shared/presentation/drawer/drawer.component';

@Component({
  selector: 'app-dashboard-component',
  imports: [DrawerComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {

  drawerVisible = false;

  openDrawer() {
    this.drawerVisible = true;
  }

  onAttach(e: any) {
    this.drawerVisible = false;
  }

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
