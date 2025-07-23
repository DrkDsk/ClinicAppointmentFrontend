import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-drawer-component',
  imports: [DrawerModule, ButtonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  visible: boolean = false;
}
