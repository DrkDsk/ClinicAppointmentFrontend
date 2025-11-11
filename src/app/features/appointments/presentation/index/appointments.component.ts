import { Component } from '@angular/core';
import {LargeButton} from '../../../../core/shared/presentation/buttons/large-button/large-button';
import {NavigationFacade} from '../../../../core/facade/navigation.facade';
import {AppPaths} from '../../../../core/constants/path.constants';

@Component({
  selector: 'app-appointments.component',
  imports: [
    LargeButton
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {

  constructor(private navigationFacade: NavigationFacade  ) {
  }

  navigateToCreateAppointment() {
    this.navigationFacade.navigate(AppPaths.createAppointment)
  }

}
